# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
if Rails.env == "development"
	Rails.application.config.assets.precompile += Rails.application.config.assets.paths.map do |path|
		Dir.glob("#{path}/**/*.js").map do |file|
			file.gsub(path+"/","")
		end +
		Dir.glob("#{path}/**/*.js.*").map do |file|
			file.gsub(path+"/","").gsub(/\.js\..*$/,'.js')
		end
		
	end.flatten
	# UGH
	Rails.application.config.assets.precompile += %w( bootstrap/affix.js bootstrap/alert.js bootstrap/button.js bootstrap/carousel.js bootstrap/collapse.js bootstrap/dropdown.js bootstrap/modal.js bootstrap/popover.js bootstrap/scrollspy.js bootstrap/tab.js bootstrap/tooltip.js bootstrap/transition.js )
else
	Rails.application.config.assets.precompile += %w( polyfill.js )
end