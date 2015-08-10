namespace :assets do

	require 'fileutils'
	require 'erubis'
	require 'json'

	OUTPUT_DIR = "#{Rails.root}/tmp/build"

	module Rake

		module TaskManager

			def redefine_task(task_class, args, &block)
				task_name, deps = resolve_args(args)
				task_name = task_class.scope_name(@scope, task_name)
				deps = [deps] unless deps.respond_to?(:to_ary)
				deps = deps.collect {|d| d.to_s }
				@tasks[task_name.to_s + ".old"] = @tasks[task_name.to_s]
				task = @tasks[task_name.to_s] = task_class.new(task_name, self)
				task.application = self
				task.enhance(deps, &block)
				task
			end
		end

		class Task
			class << self
				def redefine_task(args, &block)
					Rake.application.redefine_task(self, args, &block)
				end
			end
		end
	end

	def redefine_task(args, &block)
		Rake::Task.redefine_task(args, &block)
	end

	
	redefine_task([:precompile]) do
		Rake::Task["assets:pack"].invoke
	end
	
	task :pack => [
		"assets:environment",
		"assets:make_app_build_js",
		"assets:clean_copy",
		"assets:run_r_js",
		"assets:generate_polyfill",
		"assets:clean_output_dir",
		"assets:generate_css",
		"assets:uglify",
		"assets:write_manifest",
		"assets:produce_assets"
		#"assets:fake_assets",
		#"assets:mark_for_deletion",
		#"assets:precompile.old",
		#"assets:restore_assets",
		#"assets:delete_old_assets",
		#"assets:write_manifest"
	] 
	
	task :distribute => ["assets:pack"] do
		require 'uglifier'
		puts "Running task assets:distribute"
		
		puts "\nPacking scripts into #{Dir.pwd}/dist"
		
		manifest = JSON.parse(File.read("#{Rails.root}/public/assets/manifest.json"))
		
		FileUtils.mkdir_p "#{Rails.root}/dist/javascripts/"
		
		shim_manifest = {"assets"=>{}}
		files = Dir.glob("#{Rails.root}/public/assets/main-*.js") + Dir.glob("#{Rails.root}/public/assets/require-*.js") + Dir.glob("#{Rails.root}/public/assets/routes/**/*.js")
		files.each do |file|
			out_file = "dist/javascripts/#{manifest["files"][file.sub("#{Rails.root}/public/assets/", "")]["logical_path"]}".sub(/\.js$/,".js")
			FileUtils.mkdir_p File.dirname(out_file)
			FileUtils.cp file, out_file
			
			shim_manifest["assets"][out_file.sub("#{Rails.root}/dist/javascripts/","")] = out_file.sub("#{Rails.root}/dist/javascripts/","")
		end
		
		# Rewrite main.js as app.js and build a user editable main.js (so users can configure RequireJS to meet their needs).
		correct_main = File.read("#{Rails.root}/dist/javascripts/main.js").sub(/var requirejs_configuration\=.*define\(\"main\"\,function\(\)\{\}\),/,"")
		File.open("#{Rails.root}/dist/javascripts/app.js","w") do |fp|
			fp.write(correct_main)
		end
		File.open("#{Rails.root}/dist/javascripts/main.js","w") do |fp|
			fp.write(Erubis::Eruby.new(File.read("#{Rails.root}/app/assets/javascripts/main.js.erb")).result(binding()).sub(/,\n\s+'paths':.*\}\n\};/m,"\n};").sub("'baseUrl': 'assets'", "'baseUrl': 'javascripts'").sub("requirejs.config","/* #{"*" * 6} DO NOT EDIT BELOW THIS LINE #{"*" * 72} */\n\nrequirejs_configuration.map={\"*\":{\"underscore\":\"lodash\"}};requirejs.config").sub(/\nvar manifest.*$/m,Uglifier.compile("require([\"app\"],function(app){window.manifest=#{JSON.pretty_generate(shim_manifest)}; app.start();})")))
		end
	end
	
	# Run r.js on the clean copy of our assets directory:
	task :run_r_js do
		puts "Running task assets:run_r_js"
		system("node #{Rails.root}/vendor/assets/r.js/dist/r.js -o #{Rails.root}/app.build.js baseUrl=tmp/assets-clean_copy/ appDir='' mainConfigFile=#{Rails.root}/tmp/assets-clean_copy/main.js")
		FileUtils.cp(Rails.application.assets.find_asset("require.js").filename, "#{OUTPUT_DIR}")
		
		FileUtils.rm_r "#{Rails.root}/tmp/assets-clean_copy"
		FileUtils.rm "#{Rails.root}/app.build.js"
	end

	task :clean_output_dir do
		puts "Running assets:clean_output_dir"
		files = ["#{OUTPUT_DIR}/require.js", "#{OUTPUT_DIR}/polyfill.js"]
		files += JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/#{x}.js"}
		(Dir.glob("#{OUTPUT_DIR}/**/*.js")).each do |file|
			next if files.include? file
			File.delete(file)
		end
		
		Dir.glob("#{OUTPUT_DIR}/**/*").select{ |d| File.directory? d}.sort{ |a,b| b.count('/') <=> a.count('/') }.each{ |d| Dir.rmdir(d) if (Dir.entries(d) - %w[.. .]).empty?}
		FileUtils.rm_r("#{OUTPUT_DIR}/ui")
		FileUtils.rm("#{OUTPUT_DIR}/build.txt")
	end
	
	def javascript_path(file)
		file.sub!(/\.js$/,"")
		if File.exists? "#{Rails.root}/app/assets/javascripts/#{file}.js"
			return file
		else
			Dir.glob("#{Rails.root}/vendor/assets/*").each do |package|
				if File.exists? "#{package}/#{file}.js"
					return "#{package}/#{file}".sub(Rails.root.to_s+"/","").gsub(/vendor\/assets\/[^\/]+\//,'')
				end
			end
		end
		
		""
	end
	
	task :make_app_build_js do
		require 'digest/md5'
		config = JSON.parse(Erubis::Eruby.new(File.read("#{Rails.root}/app/assets/javascripts/main.js.erb")).result(binding()).gsub(/(\t|\n)/,'').split('var requirejs_configuration = ')[1].split(';')[0].gsub("'",'"'))
	
		built_modules = []
		
		manifest = (!File.exists? "#{Rails.root}/asset-manifest.json") ? {} : JSON.parse(File.read("#{Rails.root}/asset-manifest.json"))
		
		config["modules"] = []
		
		build_mod = false
		if manifest.has_key? "main.js"
			if Dir.glob("#{Rails.root}/public/assets/main*.js").length == 0
				build_mod = true
			else
				manifest["main.js"].each{ |file, hash| if (not File.exists? file) or (Digest::MD5.hexdigest(File.read(file)) != hash) then build_mod = true end }
			end
		else
			build_mod = true
		end
		
		if build_mod
			config['modules'].push(
				{
					'name' => 'main',
					'include' => [
						'text',
						'json'
					]
				}
			)
			built_modules.push("main")
		end
		
		Dir.glob("#{Rails.root}/app/assets/javascripts/routes/**/*.js").each do |route_file|
			
			route_file.gsub!("#{Rails.root}/app/assets/javascripts/","").gsub!(/\.js$/,"")
			build_mod = false
						
			if manifest.has_key? route_file+".js"
				if Dir.glob("#{Rails.root}/public/assets/#{route_file}*.js").length == 0
					build_mod = true
				else
					manifest[route_file+".js"].each {|file, hash| if (not File.exists? file) or (Digest::MD5.hexdigest(File.read(file)) != hash) then build_mod = true; break end }
				end
			else
				build_mod = true
			end
			
			if build_mod
				has_citeproc = false
				if manifest.has_key? route_file+".js"
					manifest[route_file+".js"].each do |file, hash|
						if file =~ /citeproc/
							has_citeproc = true
							break
						end
					end
				end
				mod_def = {
					'name' => route_file,
					'exclude' => ['main']
				}
				# Include the sidebar component in the build, if it exists:
				if File.exists? "#{Rails.root}/app/assets/javascripts/components/sidebar/#{route_file}.js.jsx" or File.exists? "#{Rails.root}/app/assets/javascripts/components/sidebar/#{route_file}.js"
					mod_def['include'] = [
						"components/sidebar/#{route_file}"
					]
				end
				config['modules'].push(mod_def)
				
				if has_citeproc
					FileUtils.mkdir_p File.dirname("#{Rails.root}/tmp/assets-clean_copy/#{route_file.sub(/\.js$/,"")}_wo_citeproc.js")
					FileUtils.touch "#{Rails.root}/tmp/assets-clean_copy/#{route_file.sub(/\.js$/,"")}_wo_citeproc.js"
					mod_def = {
						'name' => route_file + "_wo_citeproc",
						'exclude' => [
							'main'
						],
						'include' => [
							route_file
						]
					}
					
					mod_def['exclude'] += Dir.glob("#{Rails.root}/app/assets/javascripts/vendor/citeproc-amd/**/*.js").map{|x| x.sub("#{Rails.root}/app/assets/javascripts/","").sub(/\.js$/,"") }
					if File.exists? "#{Rails.root}/app/assets/javascripts/components/sidebar/#{route_file}.js.jsx" or File.exists? "#{Rails.root}/app/assets/javascripts/components/sidebar/#{route_file}.js"
						mod_def['include'].push("components/sidebar/#{route_file}")
					end
					config['modules'].push(mod_def)
					built_modules.push(route_file + "_wo_citeproc")
				end
				built_modules.push(route_file)
			end
			
		end

		FileUtils.mkdir_p("#{Rails.root}/tmp/")
		File.open("#{Rails.root}/tmp/build-manifest.json", "w") do |fp|
			fp.write(JSON.pretty_generate(built_modules))
		end
		
		config['appDir'] = "#{Rails.root}/tmp/assets-clean_copy"
		config['baseUrl'] = 'assets'
		config['dir'] = "#{OUTPUT_DIR}"
		config['skipDirOptimize'] = true
		config['optimize'] = 'none'
		
		File.open("#{Rails.root}/app.build.js", 'w') do |json_fp|
			json_fp.write(JSON.pretty_generate(config))
		end
	end

	task :compile_react do
		require 'babel/transpiler'
		
		build_manifest = JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json")).map{|x| x+".js" }
		asset_manifest = (!File.exists? "#{Rails.root}/asset-manifest.json") ? {} : JSON.parse(File.read("#{Rails.root}/asset-manifest.json"))
		
		if build_manifest.length > 0 and not build_manifest.include? "main"
			build_manifest.push("main.js")
		end
		
		react_to_compile = []
		
		build_manifest.each do |mod|
			if not asset_manifest.has_key? mod
				react_to_compile = Dir.glob("#{Rails.root}/app/assets/javascripts/**/*.jsx")
				break
			else
				asset_manifest[mod].each do |requirement, hash|
					react_to_compile.push("#{Rails.root}/#{requirement}") if requirement =~ /\.js.jsx$/
				end
			end
		end
		puts "Running task assets:compile_react"
		react_to_compile.uniq.each do |react_file|
			new_file = react_file.gsub("#{Rails.root}/app/assets/javascripts/", "#{Rails.root}/tmp/assets-clean_copy/").gsub(/\.js\.jsx$/,".js")
			if not File.exists? File.dirname(new_file)
				FileUtils.mkdir_p "#{File.dirname(new_file)}"
			end
			File.open(new_file, 'w') do |fp|
				fp.write Babel::Transpiler.transform(File.read(react_file))['code'].gsub(/\\n/,"\n").gsub(/\\t/,"\t")
			end
		end
	end

	task :generate_polyfill do
		if Dir.glob("#{Rails.root}/public/assets/polyfill-*.js").length == 0
			puts "Running task assets:generate_polyfill"
			polyfill = [
				'/vendor/assets/respond/dest/respond.src.js',
				'/vendor/assets/css3-mediaqueries-js/css3-mediaqueries.js',
				'/vendor/assets/html5shiv/dist/html5shiv.js'
			]
			FileUtils.mkdir_p "#{OUTPUT_DIR}/"
			File.open("#{OUTPUT_DIR}/polyfill.js", 'w') do |poly_fp|
				polyfill.each do |p|
					poly_fp.write(IO.read "#{Rails.root}/#{p}")
				end
			end
		end
	end

	# Create a copy of the assets directory that only uses the vendor packages we are actually deploying and the JS files we need:
	task :clean_copy do
	
		puts "Running task assets:clean_copy"
	
		# Create our copy:
		FileUtils.mkdir_p("#{Rails.root}/tmp/assets-clean_copy/")
	
		# Read in the r.js build script:
		requirejs_config = JSON.parse(IO.read("#{Rails.root}/app.build.js").gsub(/^\(/,"").gsub(/\)$/,"").gsub(/\'/,"\""))
		
		if requirejs_config['modules'].length > 0
			Rake::Task["assets:compile_react"].invoke
		end
	
		dirs = Dir.glob("#{Rails.root}/vendor/assets/*") + ["#{Rails.root}/app/assets/javascripts"]
		requirejs_config['paths'].each do |k, file|
			dirs.each do |dir|
				if dir.include? "#{Rails.root}/vendor/assets/"	
					if File.exists? "#{dir}/#{file}"
					elsif File.exists? "#{dir}/#{file}.js"
						file += ".js"
					end
				else
					if File.exists? "#{dir}/#{file}.js"
						file += ".js"
					end
				end
				if File.exists? "#{dir}/#{file}"# and not File.directory? "#{dir}/#{file}"
					FileUtils.mkdir_p("#{Rails.root}/tmp/assets-clean_copy/" + File.dirname(file))
					FileUtils.cp_r(dir + "/" + file, "#{Rails.root}/tmp/assets-clean_copy/" + File.dirname(file))
				end
			end
		end

		File.open("#{Rails.root}/tmp/assets-clean_copy/main.js", 'w') do |fp|
			fp.write Erubis::Eruby.new(File.read("#{Rails.root}/app/assets/javascripts/main.js.erb")).result(binding())
		end
	end
	task :generate_css do
		FileUtils.mkdir_p "#{OUTPUT_DIR}/"
		Dir.glob("app/assets/stylesheets/**/[^_]*.scss") do |file|
			file = file.sub("app/assets/stylesheets/","").sub(/\.css.*$/,".css").sub(/\.scss$/,".css")
			File.open("#{OUTPUT_DIR}/#{file}","w") do |fp|
				fp.write Rails.application.assets.find_asset(file).to_s
			end
		end
	end
	task :uglify do
		puts "Running task assets:uglify"
		Dir.glob("#{OUTPUT_DIR}/**/*.js").each do |file|	
			next if not File.exists? file
			puts "Uglifying #{file}"
			compressed_source = Uglifier.new(output: { comments: :copyright }).compile(File.read(file))
			File.open(file, 'w') do |f_pointer|
				f_pointer.write(compressed_source)#.gsub(/\/\*.*?\*\//m,""))
			end
		end
	end
	task :write_manifest do
		manifest = {
			"assets" => {},
			"files" => {}
		}
		Dir.glob("#{OUTPUT_DIR}/**/*.*").each do |file|
			current_file = file.sub("#{OUTPUT_DIR}/","")
			current_file_manifest_entry = {
				"logical_path" => current_file,
				"mtime" => File.mtime(file).to_s,
				"size" => File.size(file).to_i,
				"digest" => Digest::SHA2.hexdigest(File.read(file)).to_s
			}
			current_file_manifest_entry["integrity"] = "sha256-#{[[current_file_manifest_entry["digest"]].pack("H*")].pack("m0")}"
			manifest["assets"][current_file] = current_file.sub(/\.(\w+)$/) { |ext| "-#{current_file_manifest_entry["digest"]}#{ext}" }
			manifest["files"][manifest["assets"][current_file]] = current_file_manifest_entry
		end
		File.open("#{OUTPUT_DIR}/manifest.json","w"){ |m| m.write(JSON.generate(manifest))}
	end
	task :produce_assets do
		manifest = JSON.parse(File.read("#{OUTPUT_DIR}/manifest.json"))
		Dir.glob("#{OUTPUT_DIR}/**/*.*").each do |file|
			next if File.basename(file) == "manifest.json"
			extension = file.match(/\.(\w+)$/)[1]
			name = file.sub(".#{extension}","")
			existing_asset_files = Dir.glob("#{Rails.root}/public/assets/#{name}-*.#{extension}").map do |f|
				return f if f == "#{Rails.root}/public/assets/#{name}-#{manifest['files'][manifest['assets'][file.sub($output_directory,"")]]['digest']}.#{extension}"
				File.delete f
				return nil
			end.delete_if{|x| x.nil? }
			next if existing_asset_files.length > 0
			FileUtils.mkdir_p(File.dirname("#{Rails.root}/public/assets/#{name.sub("#{OUTPUT_DIR}/","")}"))
			File.open("#{Rails.root}/public/assets/#{name.sub("#{OUTPUT_DIR}/","")}-#{manifest['files'][manifest['assets'][file.sub("#{OUTPUT_DIR}/","")]]['digest']}.#{extension}", "w") do |fp|
				fp.write(File.read(file))
			end	
		end
		
		FileUtils.cp("#{OUTPUT_DIR}/manifest.json", "#{Rails.root}/public/assets/")
		Dir.glob("#{Rails.root}/public/assets/.sprockets-manifest*").each { |m| File.delete(m) }
		FileUtils.cp("#{OUTPUT_DIR}/manifest.json", "#{Rails.root}/public/assets/.sprockets-manifest-#{SecureRandom.hex(16)}.json")
		FileUtils.rm_r(OUTPUT_DIR)
	end
end
