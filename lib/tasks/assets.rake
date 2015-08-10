namespace :assets do

	require 'fileutils'
	require 'erubis'
	require 'json'

	OUTPUT_DIR = "#{Rails.root}/tmp/build"
	
	MAIN_FILE = "main.js"

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
		"assets:make_build_manifest",
		"assets:handle_citeproc",
		"assets:generate_polyfill",
		"assets:clean_output_dir",
		"assets:generate_css",
		#"assets:uglify",
		"assets:write_manifest",
		"assets:produce_assets"
	] 
	
	task :distribute => ["assets:pack"] do
		require 'uglifier'
		puts "Running task assets:distribute"
		
		puts "\nPacking scripts into #{Dir.pwd}/dist"
		
		manifest = JSON.parse(File.read("#{Rails.root}/public/assets/manifest.json"))
		
		FileUtils.mkdir_p "#{Rails.root}/dist/javascripts/"
		
		shim_manifest = {"assets"=>{}}
		files = Dir.glob("#{Rails.root}/public/assets/#{(File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")}-*.js") + Dir.glob("#{Rails.root}/public/assets/require-*.js") + Dir.glob("#{Rails.root}/public/assets/routes/**/*.js")
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
		File.open("#{Rails.root}/dist/javascripts/#{MAIN_FILE}","w") do |fp|
			fp.write(Rails.application.assets.find_asset(MAIN_FILE).to_s.sub(/,\n\s+'paths':.*\}\n\};/m,"\n};").sub("'baseUrl': 'assets'", "'baseUrl': 'javascripts'").sub("requirejs.config","/* #{"*" * 6} DO NOT EDIT BELOW THIS LINE #{"*" * 72} */\n\nrequirejs_configuration.map={\"*\":{\"underscore\":\"lodash\"}};requirejs.config").sub(/\nvar manifest.*$/m,Uglifier.compile("require([\"app\"],function(app){window.manifest=#{JSON.pretty_generate(shim_manifest)}; app.start();})")))
		end
	end
	
	def get_application_config
		config = JSON.parse(Rails.application.assets.find_asset(MAIN_FILE).gsub(/-[a-f0-9]{64}(['"])/,'\1').gsub(/(['"])\/assets\//,'\1').to_s.gsub(/(\t|\n)/,'').split(/var requirejs_configuration\s*\=\s*/)[1].split(';')[0].gsub("'",'"').gsub(/([{,}])([A-Za-z0-9_]+)\:/,'\1"\2":'))
	end
	task :make_app_build_js do
		config = JSON.parse(Rails.application.assets.find_asset(MAIN_FILE).to_s.gsub(/-[a-f0-9]{64}(['"])/,'\1').gsub(/(['"])\/assets\//,'\1').gsub(/(\t|\n)/,'').split(/var requirejs_configuration\s*\=\s*/)[1].split(';')[0].gsub("'",'"').gsub(/([{,}])([A-Za-z0-9_]+)\:/,'\1"\2":'))
	
		built_modules = []
		
		manifest = Dir.glob("#{Rails.root}/public/assets/.build-manifest-*.json").length > 0 ? JSON.parse(File.read(Dir.glob("#{Rails.root}/public/assets/.build-manifest-*.json").first)) : {}
		config["modules"] = []
		
		build_mod = false
		if manifest.has_key? MAIN_FILE.sub(/\.js$/,"")
			if Dir.glob("#{Rails.root}/public/assets/#{(File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")}*.js").length == 0
				build_mod = true
			else
				manifest[MAIN_FILE.sub(/\.js$/,"")].each{ |file, digest| file = Rails.application.assets.find_asset(file); if file.nil? or Digest::SHA2.hexdigest(file.to_s) != digest then build_mod = true; break end}
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
						
			if manifest.has_key? route_file
				if Dir.glob("#{Rails.root}/public/assets/#{route_file}*.js").length == 0
					build_mod = true
				else
					manifest[route_file].each{ |file, digest| file = Rails.application.assets.find_asset(file); if file.nil? or Digest::SHA2.hexdigest(file.to_s) != digest then build_mod = true; break end}
				end
			else
				build_mod = true
			end
			
			if build_mod
				mod_def = {
					'name' => route_file,
					'exclude' => [(File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")]
				}
				# Include the sidebar component in the build, if it exists:
				if not Rails.application.assets.find_asset("components/sidebar/#{route_file}.js").nil?
					mod_def['include'] = [
						"components/sidebar/#{route_file}"
					]
				end
				config['modules'].push(mod_def)
				
				built_modules.push(route_file)
			end
			
		end

		# Do W/O Citeproc compilation:
		# The best way to handle this, in a fresh environemnt (ie. not having to build twice), is to compile all the routes with citeproc and then remove the ones later (in :handle_citeproc) that correspond to routes that didn't have citeproc.
		#
		# This is inefficient but seems the best way to build dependencies w/o already knowing them in advance.
		built_modules.each do |built_module|
			next if built_module =~ /wo_citeproc/ or built_module == (File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")
			if not manifest.has_key? built_module
				FileUtils.mkdir_p File.dirname("#{Rails.root}/tmp/assets-clean_copy/#{built_module}_wo_citeproc.js")
				FileUtils.touch "#{Rails.root}/tmp/assets-clean_copy/#{built_module}_wo_citeproc.js"
				mod_def = {
					'name' => built_module + "_wo_citeproc",
					'include' => [
						built_module
					]
				}
		
				if(built_module != (File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js"))
					mod_def['exclude'] = [(File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")]
				else
					mod_def['exclude'] = []
				end
	
				mod_def['exclude'] += Dir.glob("#{Rails.root}/app/assets/javascripts/vendor/citeproc-amd/**/*.js").map{|x| x.sub("#{Rails.root}/app/assets/javascripts/","").sub(/\.js$/,"") }
				if not Rails.application.assets.find_asset("components/sidebar/#{built_module}.js").nil?
					mod_def['include'].push("components/sidebar/#{built_module}")
				end
				config['modules'].push(mod_def)
				built_modules.push(built_module + "_wo_citeproc")
			else
				manifest[built_module].each do |file, hash|
					if file =~ /citeproc/
						FileUtils.mkdir_p File.dirname("#{Rails.root}/tmp/assets-clean_copy/#{built_module}_wo_citeproc.js")
						FileUtils.touch "#{Rails.root}/tmp/assets-clean_copy/#{built_module}_wo_citeproc.js"
						mod_def = {
							'name' => built_module + "_wo_citeproc",
							'include' => [
								built_module
							]
						}
		
						if(built_module != (File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js"))
							mod_def['exclude'] = [(File.dirname(MAIN_FILE) == "." ? "" : File.dirname(MAIN_FILE)+"/") + File.basename(MAIN_FILE,".js")]
						else
							mod_def['exclude'] = []
						end
	
						mod_def['exclude'] += Dir.glob("#{Rails.root}/app/assets/javascripts/vendor/citeproc-amd/**/*.js").map{|x| x.sub("#{Rails.root}/app/assets/javascripts/","").sub(/\.js$/,"") }
						if not Rails.application.assets.find_asset("components/sidebar/#{built_module}.js").nil?
							mod_def['include'].push("components/sidebar/#{built_module}")
						end
						config['modules'].push(mod_def)
						built_modules.push(built_module + "_wo_citeproc")
					end
				end
			end
		end

		FileUtils.mkdir_p("#{Rails.root}/tmp/")
		File.open("#{Rails.root}/tmp/build-manifest.json", "w") do |fp|
			fp.write(JSON.pretty_generate(built_modules.uniq))
		end
		
		config['appDir'] = "#{Rails.root}/tmp/assets-clean_copy"
		config['baseUrl'] = 'assets'
		config['dir'] = "#{OUTPUT_DIR}"
		config['skipDirOptimize'] = true
		config['optimize'] = 'none'
		config['modules'] = config['modules'].uniq
		
		File.open("#{Rails.root}/app.build.js", 'w') do |json_fp|
			json_fp.write(JSON.pretty_generate(config))
		end
	end

	task :clean_copy do
	
		puts "Running task assets:clean_copy"
	
		# Create our copy:
		FileUtils.mkdir_p("#{Rails.root}/tmp/assets-clean_copy/")
	
		# Read in the r.js build script:
		requirejs_config = JSON.parse(IO.read("#{Rails.root}/app.build.js").gsub(/^\(/,"").gsub(/\)$/,"").gsub(/\'/,"\""))
	
		dirs = Dir.glob("#{Rails.root}/vendor/assets/*") + ["#{Rails.root}/app/assets/javascripts"]
		requirejs_config['paths'].each do |k, file|
			sprockets_file = Rails.application.assets.find_asset(file+".js")
			sprockets_dir = Rails.application.assets.paths.map{ |dir| if File.directory? "#{dir}/#{file}" then "#{dir}/#{file}" else nil end }.delete_if{|x|x.nil?}.first
			if not sprockets_file.nil?
				if not File.exists? "#{Rails.root}/tmp/assets-clean_copy/#{file}.js"
					FileUtils.mkdir_p("#{Rails.root}/tmp/assets-clean_copy/" + File.dirname(file)) if not File.directory? "#{Rails.root}/tmp/assets-clean_copy/" + File.dirname(file)
					File.open("#{Rails.root}/tmp/assets-clean_copy/#{file}.js","w") {|fp|fp.write(sprockets_file.to_s)}
				end
			end
			if not sprockets_dir.nil?
				if not File.directory? "#{Rails.root}/tmp/assets-clean_copy/#{file}"
					FileUtils.cp_r sprockets_dir, "#{Rails.root}/tmp/assets-clean_copy/#{file}"
				end
			end	
		end

		File.open("#{Rails.root}/tmp/assets-clean_copy/#{MAIN_FILE}", 'w') do |fp|
			fp.write Rails.application.assets.find_asset(MAIN_FILE).to_s.gsub(/-[a-f0-9]{64}(['"])/,'\1').gsub(/(['"])\/assets\//,'\1')
		end
	end
	
	# Run r.js on the clean copy of our assets directory:
	task :run_r_js do
		built_modules = JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json"))
		puts "Running task assets:run_r_js"
		if built_modules.length > 0
			system("node #{Rails.root}/node_modules/requirejs/bin/r.js -o #{Rails.root}/app.build.js baseUrl=tmp/assets-clean_copy/ appDir='' mainConfigFile=#{Rails.root}/tmp/assets-clean_copy/#{MAIN_FILE}")
		end
		if Dir.glob("#{Rails.root}require-*.js").length == 0
			FileUtils.mkdir_p "#{OUTPUT_DIR}"
			if Rails.env != "production"
				FileUtils.cp(Rails.application.assets.find_asset("require.js").filename, "#{OUTPUT_DIR}")
			else
				File.open("#{OUTPUT_DIR}/require.js","w"){|fp| fp.write Uglifier.compile(Rails.application.assets.find_asset("require.js").to_s)}
			end
		end
	end
	
	task :handle_citeproc do
		built_modules = JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json"))
		build_dependencies = {}; if File.exists? "#{OUTPUT_DIR}/build.txt" then File.read("#{OUTPUT_DIR}/build.txt").split("\n\n").each{ |x| (mod,dependencies) = x.split(/^-+$/); build_dependencies[mod.sub(/\.js$/,"").gsub(/\n/,"")] = dependencies.gsub(/\n/,"") } end
		
		deleted_modules = []
		
		built_modules.each do |built_module|
			next if not built_module.include? "_wo_citeproc"
			if not build_dependencies[built_module.sub("_wo_citeproc","")].include? "citeproc"
				FileUtils.rm "#{OUTPUT_DIR}/#{built_module}.js"
				deleted_modules.push(built_module)
			end
		end
		
		built_modules -= deleted_modules
		
		File.open("#{Rails.root}/tmp/build-manifest.json", "w"){ |fp| fp.write(JSON.generate(built_modules)) }
	end

	task :make_build_manifest do
		built_modules = JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json"))
		build_dependencies = {}; if File.exists? "#{OUTPUT_DIR}/build.txt" then File.read("#{OUTPUT_DIR}/build.txt").split("\n\n").each{ |x| (mod,dependencies) = x.split(/^-+$/); build_dependencies[mod.sub(/\.js$/,"").gsub(/\n/,"")] = dependencies.split(/\n/)[1..-1] }end
		build_manifest = Dir.glob("#{Rails.root}/public/assets/.build-manifest-*.json").length == 0 ? {} : JSON.parse(File.read(Dir.glob("#{Rails.root}/public/assets/.build-manifest-*.json").first))
		
		built_modules.each do |built_module|
			build_manifest[built_module] = {}
			build_dependencies[built_module].each do |dependency|
				build_manifest[built_module][dependency] = Digest::SHA2.hexdigest(Rails.application.assets.find_asset(dependency).to_s)
			end
		end
		Dir.glob("#{Rails.root}/public/assets/.build-manifest-*.json").each{ |x| File.delete(x) }
		File.open("#{OUTPUT_DIR}/build-manifest.json","w"){ |fp| fp.write JSON.generate(build_manifest) }
		FileUtils.rm_r "#{Rails.root}/tmp/assets-clean_copy"
		FileUtils.rm "#{Rails.root}/app.build.js"
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

	task :clean_output_dir do
		puts "Running assets:clean_output_dir"
		files = ["#{OUTPUT_DIR}/require.js", "#{OUTPUT_DIR}/polyfill.js"]
		files += JSON.parse(File.read("#{Rails.root}/tmp/build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/#{x}.js"}
		(Dir.glob("#{OUTPUT_DIR}/**/*.js")).each do |file|
			next if files.include? file
			File.delete(file)
		end
		
		Dir.glob("#{OUTPUT_DIR}/**/*").select{ |d| File.directory? d}.sort{ |a,b| b.count('/') <=> a.count('/') }.each{ |d| Dir.rmdir(d) if (Dir.entries(d) - %w[.. .]).empty?}
		FileUtils.rm_r("#{OUTPUT_DIR}/ui") if File.exists? "#{OUTPUT_DIR}/ui" 
		FileUtils.rm("#{OUTPUT_DIR}/build.txt") if File.exists? "#{OUTPUT_DIR}/build.txt" 
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
		if Dir.glob("#{Rails.root}/public/assets/.sprockets-manifest*.json").length > 0
			manifest = JSON.parse(File.read(Dir.glob("#{Rails.root}/public/assets/.sprockets-manifest*.json").first))
		else
			manifest = {
				"assets" => {},
				"files" => {}
			}
		end
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
			next if File.basename(file) == "build-manifest.json"
			FileUtils.mkdir_p(File.dirname("#{Rails.root}/public/assets/#{name.sub("#{OUTPUT_DIR}/","")}"))
			File.open("#{Rails.root}/public/assets/#{name.sub("#{OUTPUT_DIR}/","")}-#{manifest['files'][manifest['assets'][file.sub("#{OUTPUT_DIR}/","")]]['digest']}.#{extension}", "w") do |fp|
				fp.write(File.read(file))
			end	
		end
		
		
		FileUtils.cp("#{OUTPUT_DIR}/build-manifest.json", "#{Rails.root}/public/assets/.build-manifest-#{SecureRandom.hex(16)}.json") if File.exists? "#{OUTPUT_DIR}/build-manifest.json"
		
		FileUtils.cp("#{OUTPUT_DIR}/manifest.json", "#{Rails.root}/public/assets/")
		Dir.glob("#{Rails.root}/public/assets/.sprockets-manifest*").each { |m| File.delete(m) }
		FileUtils.cp("#{OUTPUT_DIR}/manifest.json", "#{Rails.root}/public/assets/.sprockets-manifest-#{SecureRandom.hex(16)}.json")
		FileUtils.rm_r(OUTPUT_DIR)
	end
end
