source 'https://rubygems.org'

ruby '2.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use HAML:
gem 'haml-rails', '>= 0.3.4'
# Use ReactJS
gem 'react-rails'

# Use Unicorn as the app server
# gem 'unicorn'
gem 'puma'

gem 'bootstrap-sass'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Login Manager:
gem 'devise'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  
  # Load compass for asset compilation:
  gem 'compass'
  
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
end

group :production do
	# PostgreSQL:
	gem 'pg'
	
	# Heroku:
	gem 'rails_12factor'
	
	# Compress That HTML:
	gem 'htmlcompressor'
end

