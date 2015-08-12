class AnthologiesController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_filter :authenticate_user_from_token!
	before_filter :authenticate_user!, :except => [:view]
		
	clear_respond_to
	respond_to :json
	
	def index
		if params.has_key? :no_preload
			models = current_user.anthologies.to_json
		else
			models = current_user.anthologies.to_json(:methods => ["documents"])
		end
		render json: models
	end
	
	def view
		begin
			if params.has_key? :no_preload
				model = Anthology.preload(:user).find(params['id']).to_json(:include => [:user => {:except=>:authentication_token}])
			else
				model = Anthology.preload(:documents, :user).find(params['id']).to_json(:include => [:documents, :user => {:except=>:authentication_token}])
			end
		rescue
			model = {}
		end
		render json: model, status: model == {} ? 400 : 200
	end
	
	def new
		model = Anthology.new(permissable_parameters)
		model.user_id = current_user.id
		if model.save
			#render json: {success: true}.to_json, status: 202
			redirect_to action: 'view', id: model.id
		else
			render json: {success: false}.to_json, status: 400
		end
	end
	
	def save
		model = Anthology.find(params['id'])
		if model.update(permissable_parameters)
			render json: {success: true}.to_json, status: 202
		else
			render json: {success: false}.to_json, status: 400
		end
	end
	
	def destroy
		model = Anthology.find(params['id'])
		begin
			model.destroy
			render json: {success: true}.to_json, status: 202
		rescue Exception => e  
			render json: {success: false, message: e.message}.to_json, status: 400
		end
	end
	
	private
	def permissable_parameters
		params.permit(:title, :toc)
	end
end
