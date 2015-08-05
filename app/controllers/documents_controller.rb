class DocumentsController < ApplicationController
	def index
		render json: Document.all
	end
	
	def view
		render json: Document.find_by(id: params['id'])
	end
end
