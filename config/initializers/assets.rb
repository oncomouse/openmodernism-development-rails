# Be sure to restart your server when you modify this file.


Rails.application.configure do
	# Version of your assets, change this if you want to expire all your assets.
	config.assets.version = '1.0'

	# Add additional assets to the asset load path
	# config.assets.paths << Emoji.images_path

	# Precompile additional assets.
	# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
	# config.assets.precompile += %w( search.js )

	config.assets.css_compressor = :sass
    config.middleware.use Rack::Deflater
    config.middleware.insert_before ActionDispatch::Static, Rack::Deflater

    config.middleware.use HtmlCompressor::Rack,
      compress_css: true,
      compress_javascript: true,
      css_compressor: Sass,
      enabled: true,
      javascript_compressor: :uglifier,
      preserve_line_breaks: false,
      remove_comments: true,
      remove_form_attributes: false,
      remove_http_protocol: false,
      remove_https_protocol: false,
      remove_input_attributes: true,
      remove_intertag_spaces: false,
      remove_javascript_protocol: true,
      remove_link_attributes: true,
      remove_multi_spaces: true,
      remove_quotes: true,
      remove_script_attributes: true,
      remove_style_attributes: true,
      simple_boolean_attributes: true,
      simple_doctype: false

	if Rails.env == "development"
		config.assets.precompile += config.assets.paths.map do |path|
			Dir.glob("#{path}/**/*.js").map do |file|
				file.gsub(path+"/","")
			end +
			Dir.glob("#{path}/**/*.js.*").map do |file|
				file.gsub(path+"/","").gsub(/\.js\..*$/,'.js')
			end
		
		end.flatten
	else
		
		config.assets.precompile += %w( polyfill.js main.js app.js require.js )
		config.assets.precompile += Dir.glob("#{Rails.root}/app/assets/javascripts/routes/**/*.js").map do |file|
			file.gsub("#{Rails.root}/app/assets/javascripts/","")
		end
	end
end