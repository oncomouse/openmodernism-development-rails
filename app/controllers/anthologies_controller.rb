class AnthologiesController < ApplicationController
	def index
		if params[:no_preload]
			models = Anthology.all
		else
			models = Anthology.preload(:documents).to_json(:include => [:documents])
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
