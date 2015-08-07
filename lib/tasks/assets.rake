namespace :assets do

	require 'fileutils'
	require 'erubis'
	require 'json'

	OUTPUT_DIR = "#{Rails.root}/public"

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
		"assets:make_app_build_js",
		"assets:clean_copy",
		"assets:run_r_js",
		"assets:generate_polyfill",
		"assets:uglify",
		"assets:clean_output_dir",
		"assets:fake_assets",
		"assets:mark_for_deletion",
		"assets:precompile.old",
		"assets:restore_assets",
		"assets:delete_old_assets",
		"assets:write_manifest"
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
			fp.write(Erubis::Eruby.new(File.read("#{Rails.root}/app/assets/javascripts/main.js.erb")).result(binding()).sub(/,\n\s+'paths':.*\}\n\};/m,"\n};").sub("'baseUrl': 'assets'", "'baseUrl': 'javascripts'").sub("requirejs.config","/* #{"*" * 6} DO NOT EDIT BELOW THIS LINE #{"*" * 72} */\n\nrequirejs_configuration.map={\"*\":{\"underscore\":\"lodash\"}};requirejs.config").sub(/\nvar manifest.*$/m,Uglifier.compile("require([\"app\"],function(app){window.manifest=#{JSON.generate(shim_manifest)}; app.start();})")))
		end
	end
	
	# Run r.js on the clean copy of our assets directory:
	task :run_r_js do
		puts "Running task assets:run_r_js"
		system("node #{Rails.root}/vendor/assets/r.js/dist/r.js -o #{Rails.root}/app.build.js baseUrl=assets-clean_copy/ appDir='' mainConfigFile=#{Rails.root}/assets-clean_copy/main.js")
		if Dir.glob("#{Rails.root}/public/assets/require*.js").length == 0
			FileUtils.cp("#{Rails.root}/vendor/assets/requirejs/require.js", "#{Rails.root}/app/assets/javascripts/")
		end
		
		FileUtils.rm_r "#{Rails.root}/assets-clean_copy"
		FileUtils.rm "#{Rails.root}/app.build.js"
	end

	task :clean_output_dir do
		puts "Running assets:clean_output_dir"
		files = ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
		files += JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/assets/javascripts/#{x}.js"}
		(Dir.glob("#{OUTPUT_DIR}/assets/javascripts/**/*.js")).each do |file|
			next if files.include? file
			File.delete(file)
		end
		
		Dir.glob("#{OUTPUT_DIR}/assets/**/*").select{ |d| File.directory? d}.sort{ |a,b| b.count('/') <=> a.count('/') }.each{ |d| Dir.rmdir(d) if (Dir.entries(d) - %w[.. .]).empty?}
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
					FileUtils.mkdir_p File.dirname("#{Rails.root}/assets-clean_copy/#{route_file.sub(/\.js$/,"")}_wo_citeproc.js")
					FileUtils.touch "#{Rails.root}/assets-clean_copy/#{route_file.sub(/\.js$/,"")}_wo_citeproc.js"
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
		
		File.open("#{Rails.root}/tmp/build-manifest.json", "w") do |fp|
			fp.write(JSON.generate(built_modules))
		end
		
		config['appDir'] = "#{Rails.root}/assets-clean_copy"
		config['baseUrl'] = 'assets'
		config['dir'] = "#{Rails.root}/public/assets/javascripts"
		config['skipDirOptimize'] = true
		config['optimize'] = 'none'
		
		File.open("#{Rails.root}/app.build.js", 'w') do |json_fp|
			json_fp.write(JSON.generate(config))
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
			next if not asset_manifest.has_key? mod
			asset_manifest[mod].each do |requirement, hash|
				react_to_compile.push(requirement) if requirement =~ /\.js.jsx$/
			end
		end
		
		puts "Running task assets:compile_react"
		react_to_compile.uniq.each do |react_file|
			new_file = react_file.gsub("#{Rails.root}/app/assets/javascripts/", "#{Rails.root}/assets-clean_copy/").gsub(/\.js\.jsx$/,".js")
			puts new_file
			if not File.exists? File.dirname(new_file)
				FileUtils.mkdir_p "#{File.dirname(new_file)}"
			end
			File.open(new_file, 'w') do |fp|
				fp.write Babel::Transpiler.transform(File.read(react_file))['code'].gsub(/\\n/,"\n").gsub(/\\t/,"\t")
			end
		end
	end

	task :uglify do
		require 'uglifier'
	
		puts "Running task assets:uglify"
		
		files = ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
		files += JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/assets/javascripts/#{x}.js"}
		files.each do |file|
			next if not File.exists? file
			puts "Uglifying #{file}"
			compressed_source = Uglifier.new(output: { comments: :copyright }).compile(File.read(file))
			File.open(file, 'w') do |f_pointer|
				f_pointer.write(compressed_source)#.gsub(/\/\*.*?\*\//m,""))
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
			FileUtils.mkdir_p "#{Rails.root}/public/assets/javascripts/"
			File.open("#{Rails.root}/public/assets/javascripts/polyfill.js", 'w') do |poly_fp|
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
		FileUtils.mkdir_p("#{Rails.root}/assets-clean_copy/")
	
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
				if File.exists? "#{dir}/#{file}"
					FileUtils.mkdir_p("#{Rails.root}/assets-clean_copy/" + File.dirname(file))
					FileUtils.cp_r(dir + "/" + file, "#{Rails.root}/assets-clean_copy/" + File.dirname(file))
				end
			end
		end

		File.open("#{Rails.root}/assets-clean_copy/main.js", 'w') do |fp|
			fp.write Erubis::Eruby.new(File.read("#{Rails.root}/app/assets/javascripts/main.js.erb")).result(binding())
		end
	end
	task :fake_assets do
		FileUtils.mv("#{Rails.root}/app/assets/javascripts", "#{Rails.root}/app/javascripts.assets.proper")
		FileUtils.mv("#{Rails.root}/vendor/assets", "#{Rails.root}/vendor/assets.proper")
		FileUtils.mkdir("#{Rails.root}/app/assets/javascripts")
		if(Dir.glob("#{Rails.root}/public/assets/build*.txt").length > 0)
			Dir.glob("#{Rails.root}/public/assets/build*.txt").each do |f|
				File.delete f
			end
		end
		FileUtils.cp_r("#{Rails.root}/public/assets/javascripts", "#{Rails.root}/app/assets/")
		FileUtils.rm_r("#{Rails.root}/public/assets/javascripts")
				
		(!File.exists? "#{Rails.root}/asset-manifest.json") ? {} : JSON.parse(File.read("#{Rails.root}/asset-manifest.json")).each do |asset,requirements|
			if asset =~ /\.js$/
				asset_dir_in_question = "#{Rails.root}/app/assets/javascripts"
				asset_extension_in_question = "js"
			else
				next
			end
			
			if not File.exists? "#{asset_dir_in_question}/#{asset}"
				FileUtils.mkdir_p(File.dirname("#{asset_dir_in_question}/#{asset}"))
				content = File.read(Dir.glob("#{Rails.root}/public/assets/#{asset.sub(/\.(js|css)$/,"")}*.#{asset_extension_in_question}").first).sub(/\*\/\n+/,"*/\n")
				File.open("#{asset_dir_in_question}/#{asset}", "w") do |fp|
					fp.write content
				end
			end
		end
		
	end
	task :mark_for_deletion do
		build_manifest = JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json"))
		files_to_delete = []
		build_manifest.each do |mod|
			files_to_delete += Dir.glob("#{Rails.root}/public/assets/#{mod}-*.js")
		end
		File.open("#{Rails.root}/tmp/delete-manifest.json","w") do |fp|
			fp.write JSON.generate(files_to_delete)
		end
	end
	task :restore_assets do
		FileUtils.rm_r("#{Rails.root}/app/assets/javascripts")
		FileUtils.mv("#{Rails.root}/app/javascripts.assets.proper", "#{Rails.root}/app/assets/javascripts")
		FileUtils.mv("#{Rails.root}/vendor/assets.proper", "#{Rails.root}/vendor/assets")
	end
	task :delete_old_assets do
		files_to_delete = JSON.parse(File.read("#{Rails.root}/tmp/delete-manifest.json"))
		File.delete("#{Rails.root}/tmp/delete-manifest.json")
		files_to_delete.each do |file|
			File.delete(file)
		end
	end
	task :write_manifest do
		require 'digest/md5'
		
		manifest = {:files => {}, :assets => {}}

		Dir.glob("#{Rails.root}/public/assets/**/*.*").each do |file|
			next if file =~ /manifest.json$/
			mtime = File.mtime(file).to_s
			size = File.size(file)
			file.gsub!("#{Rails.root}/public/assets/","")
			basename = file[0..file.rindex("-")-1] + file[file.rindex(".")..-1]
			manifest[:files][file] = {
				:logical_path => basename,
				:digest => file.match(/-([a-f0-9]+)\.[a-z0-9]+$/)[1],
				:mtime => mtime,
				:size => size
			}
			manifest[:assets][basename] = file
		end
		File.open("#{Rails.root}/public/assets/manifest.json", "w") do |fp|
			fp.write JSON.generate(manifest)
		end

		asset_dirs = Dir.glob("vendor/assets/*") + ["#{Rails.root}/app/assets/javascripts"]

		tmp_manifest = {}
		build = File.read(Dir.glob("#{Rails.root}/public/assets/build*.txt").first).sub(/^\n/,"").split(/\n\n/).map{ |mod| (target, requirements) = mod.split("\n----------------\n"); tmp_manifest[target] = requirements.split("\n")}

		asset_manifest = (!File.exists? "#{Rails.root}/asset-manifest.json") ? {} : JSON.parse(File.read("#{Rails.root}/asset-manifest.json"))

		asset_manifest.each do |m,v|
			asset_manifest[m].delete_if{ |file,v| (not File.exists? file) }
		end

		tmp_manifest.each { |file, mod| 
			asset_manifest[file] = {} if not asset_manifest.has_key? file
	
			mod.each{|f|
				actual_f = asset_dirs.map{ |d| if File.exists?("#{d}/#{f}") then "#{d}/#{f}" elsif File.exists?("#{d}/#{f}.erb") then "#{d}/#{f}.erb" elsif File.exists?("#{d}/#{f}.jsx") then "#{d}/#{f}.jsx" else nil end}.delete_if{|x| x.nil?}.first
				next if actual_f.nil? or not File.exists? actual_f
				asset_manifest[file][actual_f] = Digest::MD5.hexdigest(File.read(actual_f))
			}
		}
		
		File.open("#{Rails.root}/asset-manifest.json", "w") { |fp| fp.write(JSON.pretty_generate(asset_manifest)) }
		File.delete(Dir.glob("#{Rails.root}/public/assets/build*.txt").first)
		File.delete("#{Rails.root}/tmp/build-manifest.json")
	end
end
