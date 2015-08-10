class AnthologiesController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_filter :authenticate_user!, :except => [:view]
	
	clear_respond_to
	respond_to :json
	
	before_filter :response_format
	
	def response_format
		request.format = :json
	end
	
	def index
		if params[:no_preload]
			models = Anthology.find(:user_id => current_user.id).to_json
		else
			models = Anthology.preload(:documents).find(:user_id => current_user.id).to_json(:include => [:documents])
		end
		render json: models
	end
	
	def view
		begin
			if params[:no_preload]
				model = Anthology.find(params['id'])
			else
				model = Anthology.preload(:documents).find(params['id'])
			end
		rescue
			model = nil
		end
		render json: model.nil? ? "{}" : model.to_json(:include => [:documents])
	end
end
