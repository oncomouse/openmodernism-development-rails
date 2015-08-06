namespace :assets do

	require 'fileutils'
	require 'erubis'

	OUTPUT_DIR = "public"

	task :pack => ["assets:make_app_build_js", "assets:clean_copy", "assets:run_r_js", "assets:generate_polyfill", "assets:uglify", "assets:clean_output_dir", "assets:fake_assets", "assets:precompile", "assets:restore_assets", "assets:write_manifest"] 
	
	# Run r.js on the clean copy of our assets directory:
	task :run_r_js do
		puts "Running task assets:run_r_js"
		system("node vendor/assets/r.js/dist/r.js -o app.build.js baseUrl=assets-clean_copy/ appDir='' mainConfigFile=assets-clean_copy/main.js")
		if Dir.glob("public/assets/require*.js").length == 0
			FileUtils.cp("vendor/assets/requirejs/require.js", "public/assets/javascripts/")
		end
		
		FileUtils.rm_r "assets-clean_copy"
		FileUtils.rm "app.build.js"
	end

	task :clean_output_dir do
		puts "Running assets:clean_output_dir"
		files = ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
		files += JSON.parse(File.read("build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/assets/javascripts/#{x}.js"}
		(Dir.glob("#{OUTPUT_DIR}/assets/javascripts/**/*.js")).each do |file|
			next if files.include? file
			File.delete(file)
		end
		
		Dir.glob("#{OUTPUT_DIR}/assets/**/*").select{ |d| File.directory? d}.sort{ |a,b| b.count('/') <=> a.count('/') }.each{ |d| Dir.rmdir(d) if (Dir.entries(d) - %w[.. .]).empty?}
	end
	
	def javascript_path(file)
		file.sub!(/\.js$/,"")
		if File.exists? "./app/assets/javascripts/#{file}.js"
			return file
		else
			Dir.glob("vendor/assets/*").each do |package|
				if File.exists? "#{package}/#{file}.js"
					return "#{package}/#{file}".gsub(/vendor\/assets\/[^\/]+\//,'')
				end
			end
		end
		
		""
	end
	
	task :make_app_build_js do
		require 'json'
		require 'digest/md5'
		config = JSON.parse(Erubis::Eruby.new(File.read('app/assets/javascripts/main.js.erb')).result(binding()).gsub(/(\t|\n)/,'').split('var requirejs_configuration = ')[1].split(';')[0].gsub("'",'"'))
		
		built_modules = []
		
		manifest = (!File.exists? "asset-manifest.json") ? {} : JSON.parse(File.read("asset-manifest.json"))
		
		config["modules"] = []
		
		build_mod = false
		if manifest.has_key? "main.js"
			if Dir.glob("public/assets/main*.js").length == 0
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
		
		Dir.glob("app/assets/javascripts/routes/**/*.js").each do |route_file|
			
			route_file.gsub!("app/assets/javascripts/","").gsub!(/\.js$/,"")
			build_mod = false
			
			if manifest.has_key? route_file+".js"
				if Dir.glob("public/assets/#{route_file}*.js").length == 0
					build_mod = true
				else
					manifest[route_file+".js"].each{ |file, hash| if (not File.exists? file) or (Digest::MD5.hexdigest(File.read(file)) != hash) then build_mod = true end }
				end
			else
				build_mod = true
			end
			
			if build_mod
				mod_def = {
					'name' => route_file,
					'exclude' => ['main']
				}
				# Include the sidebar component in the build, if it exists:
				if File.exists? "app/assets/javascripts/components/sidebar/#{route_file}.js.jsx" or File.exists? "app/assets/javascripts/components/sidebar/#{route_file}.js"
					mod_def['include'] = [
						"components/sidebar/#{route_file}"
					]
				end
				config['modules'].push(mod_def)
				
				built_modules.push(route_file)
			end
			
		end
		
		File.open("build-manifest.json", "w") do |fp|
			fp.write(JSON.pretty_generate(built_modules))
		end
		
		config['appDir'] = './assets-clean_copy'
		config['baseUrl'] = 'assets'
		config['dir'] = "./public/assets/javascripts"
		config['skipDirOptimize'] = true
		config['optimize'] = 'none'
		
		File.open('app.build.js', 'w') do |json_fp|
			json_fp.write(JSON.pretty_generate(config))
		end
	end

	task :compile_react do
		require 'babel/transpiler'
		require 'json'
		
		build_manifest = JSON.parse(File.read("build-manifest.json")).map{|x| x+".js" }
		asset_manifest = (!File.exists? "asset-manifest.json") ? {} : JSON.parse(File.read("asset-manifest.json"))
		
		react_to_compile = []
		
		build_manifest.each do |mod|
			asset_manifest[mod].each do |requirement, hash|
				react_to_compile.push(requirement) if requirement =~ /\.js.jsx$/
			end
		end
		
		puts "Running task assets:compile_react"
		react_to_compile.each do |react_file|
			new_file = react_file.gsub('app/assets/javascripts/', 'assets-clean_copy/').gsub(/\.js\.jsx$/,".js")
			puts new_file
			if not File.exists? File.dirname(new_file)
				FileUtils.mkdir_p "#{File.dirname(new_file)}"
			end
			File.open(new_file, 'w') do |fp|
				fp.write Babel::Transpiler.transform(File.read(react_file))['code'].gsub(/\\n/,"\n").gsub(/\\t/,"\t")
			end
		end
		#system("node node node_modules/babel/bin/babel.js assets/react/components/ --out-dir assets-clean_copy/javascripts/components/")
	end

	task :uglify do
		require 'uglifier'
		require 'json'
	
		puts "Running task assets:uglify"
		
		files = ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
		files += JSON.parse(File.read("build-manifest.json")).map{ |x| "#{OUTPUT_DIR}/assets/javascripts/#{x}.js"}
		#files = Dir.glob("#{OUTPUT_DIR}/assets/javascripts/routes/**/*.js") + ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/main.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
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
		if Dir.glob("public/assets/polyfill-*.js").length == 0
			puts "Running task assets:generate_polyfill"
			polyfill = [
				'/vendor/assets/respond/dest/respond.src.js',
				'/vendor/assets/css3-mediaqueries-js/css3-mediaqueries.js',
				'/vendor/assets/html5shiv/dist/html5shiv.js'
			]
			FileUtils.mkdir_p "public/assets/javascripts/"
			File.open('public/assets/javascripts/polyfill.js', 'w') do |poly_fp|
				polyfill.each do |p|
					poly_fp.write(IO.read "./#{p}")
				end
			end
		end
	end

	# Create a copy of the assets directory that only uses the vendor packages we are actually deploying and the JS files we need:
	task :clean_copy do
		require 'json'
	
		puts "Running task assets:clean_copy"
	
		# Create our copy:
		FileUtils.mkdir_p('assets-clean_copy/')
	
		# Read in the r.js build script:
		requirejs_config = JSON.parse(IO.read('app.build.js').gsub(/^\(/,"").gsub(/\)$/,"").gsub(/\'/,"\""))
		
		if requirejs_config['modules'].length > 0
			Rake::Task["assets:compile_react"].invoke
		end
	
		dirs = Dir.glob('vendor/assets/*') + ['app/assets/javascripts']
		requirejs_config['paths'].each do |k, file|
			dirs.each do |dir|
				if dir.include? "vendor/assets/"	
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
					FileUtils.mkdir_p("assets-clean_copy/" + File.dirname(file))
					FileUtils.cp_r(dir + "/" + file, "assets-clean_copy/" + File.dirname(file))
				end
			end
		end

		File.open('assets-clean_copy/main.js', 'w') do |fp|
			fp.write Erubis::Eruby.new(File.read('app/assets/javascripts/main.js.erb')).result(binding())
		end
	end

	task :fake_assets do
		require 'json'
		FileUtils.mv("app/assets/javascripts", "app/javascripts.assets.proper")
		FileUtils.mv("vendor/assets", "vendor/assets.proper")
		FileUtils.mkdir("app/assets/javascripts")
		if(Dir.glob('public/assets/build*.txt').length > 0)
			Dir.glob('public/assets/build*.txt').each do |f|
				File.delete f
			end
		end
		FileUtils.cp_r("public/assets/javascripts", "app/assets/")
		FileUtils.rm_r("public/assets/javascripts")
				
		(!File.exists? "asset-manifest.json") ? {} : JSON.parse(File.read("asset-manifest.json")).each do |asset,requirements|
			if asset =~ /\.js$/
				asset_dir_in_question = "app/assets/javascripts"
				asset_extension_in_question = "js"
			else
				next
			end
			
			if not File.exists? "#{asset_dir_in_question}/#{asset}"
				FileUtils.mkdir_p(File.dirname("#{asset_dir_in_question}/#{asset}"))
				content = File.read(Dir.glob("public/assets/#{asset.sub(/\.(js|css)$/,"")}*.#{asset_extension_in_question}").first).sub(/\*\/\n+/,"*/\n")
				File.open("#{asset_dir_in_question}/#{asset}", "w") do |fp|
					fp.write content
				end
			end
		end
		
	end
	task :restore_assets do
		FileUtils.rm_r("app/assets/javascripts")
		FileUtils.mv("app/javascripts.assets.proper", "app/assets/javascripts")
		FileUtils.mv("vendor/assets.proper", "vendor/assets")
	end
	task :write_manifest do
		require 'json'
		require 'uglifier'
		require 'digest/md5'
		
		manifest = {:files => {}, :assets => {}}

		Dir.glob("public/assets/**/*.*").each do |file|
			next if file =~ /manifest.json$/
			mtime = File.mtime(file).to_s
			size = File.size(file)
			file.gsub!("public/assets/","")
			basename = file[0..file.rindex("-")-1] + file[file.rindex(".")..-1]
			manifest[:files][file] = {
				:logical_path => basename,
				:digest => file.match(/-([a-f0-9]+)\.[a-z0-9]+$/)[1],
				:mtime => mtime,
				:size => size
			}
			manifest[:assets][basename] = file
		end
		File.open("public/assets/manifest.json", "w") do |fp|
			fp.write JSON.pretty_generate(manifest)
		end
		
		build_manifest = JSON.parse(File.read("build-manifest.json"))
		
#		if(build_manifest.include? "main")
#			File.open(Dir.glob("public/assets/main*.js").first, "a") do |fp|
#				fp.write "#{Uglifier.compile("window.manifest = " + JSON.pretty_generate(manifest))};"
#			end
#		end
		
		require 'json'
		require 'digest/md5'

		asset_dirs = Dir.glob("vendor/assets/*") + ["app/assets/javascripts"]

		tmp_manifest = {}
		build = File.read(Dir.glob("public/assets/build*.txt").first).sub(/^\n/,"").split(/\n\n/).map{ |mod| (target, requirements) = mod.split("\n----------------\n"); tmp_manifest[target] = requirements.split("\n")}

		asset_manifest = (!File.exists? "asset-manifest.json") ? {} : JSON.parse(File.read("asset-manifest.json"))

		asset_manifest.each do |m,v|
			asset_manifest[m].delete_if{ |file,v| (not File.exists? file) }
		end

		tmp_manifest.each { |file, mod| 
			asset_manifest[file] = {} if not asset_manifest.has_key? file
	
			mod.each{|f|
				actual_f = asset_dirs.map{ |d| if File.exists?("#{d}/#{f}") then "#{d}/#{f}" elsif File.exists?("#{d}/#{f}.erb") then "#{d}/#{f}.erb" elsif File.exists?("#{d}/#{f}.jsx") then "#{d}/#{f}.jsx" else nil end}.delete_if{|x| x.nil?}.first
				asset_manifest[file][actual_f] = Digest::MD5.hexdigest(File.read(actual_f))
			}
		}
		
		File.open("asset-manifest.json", "w") { |fp| fp.write(JSON.pretty_generate(asset_manifest)) }
		File.delete(Dir.glob("public/assets/build*.txt").first)
		File.delete("build-manifest.json")
	end
end
