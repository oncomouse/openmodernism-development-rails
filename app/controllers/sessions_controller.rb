class SessionsController < Devise::SessionsController
	skip_before_filter :authenticate_user!, :only => [:create, :new]
	skip_authorization_check only: [:create, :failure, :show_current_user, :options, :new]
	respond_to :json
	
	def create
		self.resource = warden.authenticate!(auth_options)
		set_flash_message(:notice, :signed_in) if is_flashing_format?
		sign_in(resource_name, resource)
		yield resource if block_given?
		render json: resource.to_json
	end
	
	def destroy
		signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
		set_flash_message :notice, :signed_out if signed_out && is_flashing_format?
		yield if block_given?
		render json: {}
		#respond_to_on_destroy
	end
end