class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
	def index
		render :inline => "#app", :type => :haml, :layout => true
	end
	
	def jsstubs
		if Rails.env == "development"
			render :haml => 'jsstubs', :layout => false
		else
			render :plain => ""
		end
	end
end
