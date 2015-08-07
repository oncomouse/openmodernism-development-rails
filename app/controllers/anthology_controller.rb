class AnthologyController < ApplicationController
	def index
		render json: Anthology.preload(:documents).to_json(:include => [:documents])
	end
	
	def view
		render json: Anthology.preload(:documents).find(params['id']).to_json(:include => [:documents])
	end
end
