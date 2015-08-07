class DocumentsController < ApplicationController
	def index
		render json: Document.preload(:authors, :citations, :document_files).to_json(:include => [:authors, :citations, :document_files])
	end
	
	def view
		render json: Document.preload(:authors, :citations, :document_files).find(params['id']).to_json(:include => [:authors, :citations, :document_files])
	end
end
