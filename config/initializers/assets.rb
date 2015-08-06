# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.css_compressor = :sass

if Rails.env == "development"
	Rails.application.config.assets.precompile += Rails.application.config.assets.paths.map do |path|
		Dir.glob("#{path}/**/*.js").map do |file|
			file.gsub(path+"/","")
		end +
		Dir.glob("#{path}/**/*.js.*").map do |file|
			file.gsub(path+"/","").gsub(/\.js\..*$/,'.js')
		end
		
	end.flatten
else
	Rails.application.config.assets.precompile += %w( polyfill.js )
end