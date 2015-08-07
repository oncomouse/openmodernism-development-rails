class DocumentsController < ApplicationController
	def index
		render json: Document.preload(:authors, :citations, :document_files).to_json(:include => [:authors, :citations, :document_files])
	end
	
	def view
		begin
			model = Document.preload(:authors, :citations, :document_files).find(params['id'])
		rescue
			model = nil
		end
		render json: model.nil? ? "{}" : model.to_json(:include => [:authors, :citations, :document_files])
	end
end
