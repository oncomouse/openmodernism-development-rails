class SessionsController < Devise::SessionsController
	skip_before_filter :authenticate_user!, :only => [:create, :new]
	skip_before_filter :verify_signed_out_user
	skip_before_filter :verify_authenticity_token
	skip_before_filter :authenticate_user_from_token!, :only => [:create, :new]
	
	clear_respond_to
	respond_to :json

	def new
		self.resource = resource_class.new(sign_in_params)
		clean_up_passwords(resource)
		render json: nil
	end

	def create
		resource = resource_from_credentials
		return invalid_login_attempt unless resource

		if resource.valid_password?(params[:user][:password])
			render :json => { email: resource.email, :auth_token => resource.authentication_token , success: true }
		else
			invalid_login_attempt
		end
		respond_to do |format|
			format.html {
				super
			}
			format.json {


			}
		end
	end

	def destroy
		(Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
		respond_to do |format|
			format.html {
				super
			}
			format.json {
				user = User.find_by_authentication_token(request.headers['X-API-TOKEN'])
				if user
					user.reset_authentication_token!
					user.save
					render :json => { :message => 'Session deleted.' , :success => true}
				else
					render :json => { :success => false, :message => 'Invalid token.' }
				end
			}
		end
	end

	protected
	def invalid_login_attempt
		warden.custom_failure!
		render json: { success: false, message: 'Error with your login or password' }#, status: 401
	end

	def resource_from_credentials
		data = { email: params[:user][:email] }
		if res = resource_class.find_for_database_authentication(data)
			if res.valid_password?(params[:user][:password])
				res
			end
		end
	end
end