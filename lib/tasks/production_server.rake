task :production_server do
	system "env RAILS_ENV=production env RAILS_SERVE_STATIC_FILES=true rails s"
end