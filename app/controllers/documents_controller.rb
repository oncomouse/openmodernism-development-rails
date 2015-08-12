class DocumentsController < ApplicationController
	skip_before_filter :verify_authenticity_token
	skip_before_filter :authenticate_user_from_token!
	skip_before_filter :authenticate_user!
	clear_respond_to
	respond_to :json
	def index
		render json: Document.preload(:authors, :citations, :document_files).to_json(:include => [:authors, :citations, :document_files])
	end
	
	def show
		begin
			model = Document.preload(:authors, :citations, :document_files).find(params['id'])
		rescue
			model = nil
		end
		render json: model.nil? ? "{}" : model.to_json(:include => [:authors, :citations, :document_files])
	end
end
