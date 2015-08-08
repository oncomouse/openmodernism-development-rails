class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception
	protect_from_forgery with: :null_session, :if => Proc.new { |c| c.request.format == 'application/json'}
	
	before_filter :authenticate_user_from_token!
	before_filter :authenticate_user!
	
	skip_before_filter :authenticate_user!, :only => [:index]
	skip_before_filter :verify_authenticity_token
	
	after_filter :set_csrf_cookie
	
	def set_csrf_cookie
		if user_signed_in?
			cookies['API-TOKEN'] = current_user.authentication_token
			cookies['API-USER'] = current_user.email
		else
			cookies['API-TOKEN'] = :not_logged_in
			cookies['API-USER'] = :not_logged_in
		end
	end
	
	def index
		render :inline => "#app", :type => :haml, :layout => true
	end
	
	def authenticate_user_from_token!
		user_email = request.headers["X-API-EMAIL"].presence
		user_auth_token = request.headers["X-API-TOKEN"].presence
		user = user_email && User.find_by_email(user_email)

		# Notice how we use Devise.secure_compare to compare the token
		# in the database with the token given in the params, mitigating
		# timing attacks.
		if user && Devise.secure_compare(user.authentication_token, user_auth_token)
			sign_in(user, store: false)
		end
	end
end
