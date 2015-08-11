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
		render json: model
	end
	
	def edit
		begin
			model = Anthology.find(params['id'], :user_id => current_user.id)
		rescue
			model = {}
		end
		render json: model
	end
end
