class AnthologiesController < ApplicationController
	def index
		render json: Anthology.preload(:documents).to_json(:include => [:documents])
	end
	
	def view
		begin
			model = Anthology.preload(:documents).find(params['id'])
		rescue
			model = nil
		end
		render json: model.nil? ? "{}" : model.to_json(:include => [:documents])
	end
end
