namespace :assets do

	require 'fileutils'
	require 'erubis'

	OUTPUT_DIR = "public"

	task :pack => ["assets:make_app_build_js", "assets:clean_copy", "assets:compile_react", "assets:run_r_js", "assets:generate_polyfill", "assets:uglify", "assets:compile_css", "assets:clean_output_dir", "assets:fake_assets", "assets:precompile", "assets:restore_assets", "assets:write_manifest"] #
	
	task :distribute => ["assets:make_app_build_js", "assets:clean_copy", "assets:compile_react", "assets:run_r_js", "assets:generate_polyfill", "assets:uglify", "assets:compile_css", "assets:clean_output_dir"]

	# Run r.js on the clean copy of our assets directory:
	task :run_r_js do
		puts "Running task assets:run_r_js"
		system("node vendor/assets/r.js/dist/r.js -o app.build.js baseUrl=assets-clean_copy/ appDir='' mainConfigFile=assets-clean_copy/main.js")
		FileUtils.cp("vendor/assets/requirejs/require.js", "public/assets/javascripts/")
		
		FileUtils.rm_r "assets-clean_copy"
		FileUtils.rm "app.build.js"
	end

	task :clean_output_dir do
		puts "Running assets:clean_output_dir"
		files = Dir.glob("#{OUTPUT_DIR}/assets/javascripts/routes/**/*.js") + Dir.glob("#{OUTPUT_DIR}/assets/**/*.css") + ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/main.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"] 
		Dir.glob("#{OUTPUT_DIR}/assets/**/*.js").each do |file|
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
		config = JSON.parse(Erubis::Eruby.new(File.read('app/assets/javascripts/main.js.erb')).result(binding()).gsub(/(\t|\n)/,'').split('var requirejs_configuration = ')[1].split(';')[0].gsub("'",'"'))
		config['modules'] = [
			{
				'name' => 'main'
			}
		]
		Dir.glob("app/assets/javascripts/routes/**/*.js").each do |route_file|
			
			route_file.gsub!("app/assets/javascripts/","").gsub!(/\.js$/,"")
			
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
		puts "Running task assets:compile_react"
		Dir.glob('app/assets/javascripts/**/*.js.jsx').each do |react_file|
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
	
		puts "Running task assets:uglify"
		
		files = Dir.glob("#{OUTPUT_DIR}/assets/javascripts/routes/**/*.js") + ["#{OUTPUT_DIR}/assets/javascripts/require.js", "#{OUTPUT_DIR}/assets/javascripts/main.js", "#{OUTPUT_DIR}/assets/javascripts/polyfill.js"]
		files.each do |file|
			puts "Uglifying #{file}"
			compressed_source = Uglifier.compile(File.read(file))
			File.open(file, 'w') do |f_pointer|
				f_pointer.write(compressed_source)#.gsub(/\/\*.*?\*\//m,""))
			end
		end
	end

	task :generate_polyfill do
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

	# Create a copy of the assets directory that only uses the vendor packages we are actually deploying and the JS files we need:
	task :clean_copy do
		require 'json'
	
		puts "Running task assets:clean_copy"
	
		# Create our copy:
		FileUtils.mkdir_p('assets-clean_copy/')
	
		# Read in the r.js build script:
		requirejs_config = JSON.parse(IO.read('app.build.js').gsub(/^\(/,"").gsub(/\)$/,"").gsub(/\'/,"\""))
	
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

	task :compile_css do
		require 'compass'
		require 'compass/sass_compiler'
		puts "Running task assets:compile_css"
		compiled_css =  Dir.glob('app/assets/stylesheets/**/[^_]*.scss').map{ |x| File.basename(x).gsub(/\.(?:scss|sass)/,'.css') }
		FileUtils.mkdir_p "#{OUTPUT_DIR}/assets/stylesheets/"
		compiled_css.each{ |file| File.unlink("#{OUTPUT_DIR}/assets/stylesheets/#{file}") if File.exists? file }
		puts "Running Compass:"
		Compass.add_configuration({
			:http_path => "/",
			:additional_import_paths => Dir.glob('vendor/assets/*'),
			:css_dir => "#{OUTPUT_DIR}/assets/stylesheets",
			:sass_dir => "app/assets/stylesheets",
			:output_style => :compressed,
			:line_comments => false
		
		}, "compass")
		Compass.sass_compiler.compile!
		Dir.glob("#{OUTPUT_DIR}/assets/stylesheets/*.css.css").each do |file|
			FileUtils.mv(file, file.gsub(/\.css\.css$/,".css"))
		end
	end
	
	task :fake_assets do
		FileUtils.mv("app/assets", "app/assets.proper")
		FileUtils.mv("vendor/assets", "vendor/assets.proper")
		FileUtils.mv("public/assets", "app/assets")
	end
	task :restore_assets do
		FileUtils.rm_r("app/assets")
		FileUtils.mv("app/assets.proper", "app/assets")
		FileUtils.mv("vendor/assets.proper", "vendor/assets")
	end
	task :write_manifest do
		require 'json'
		require 'uglifier'
		manifest = {:files => {}, :assets => {}}

		Dir.glob("public/assets/**/*.*").each do |file|
			mtime = File.mtime(file).to_s
			size = File.size(file)
			file.gsub!("public/assets/","")
			basename = file.split(/-[a-f0-9]+\.[a-z]+$/)[0] + file.match(/\.[a-z]+$/)[0]
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
		#main = IO.read("public/assets/#{manifest[:assets]['main.js']}")
		File.open("public/assets/#{manifest[:assets]['main.js']}", "a") do |fp|
			fp.write "#{Uglifier.compile("window.manifest = " + JSON.pretty_generate(manifest))};"
			#fp.write main
		end
	end
end
