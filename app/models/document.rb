class Document < ActiveRecord::Base
	#property :id, Serial
	#property :metadata, Text, :lazy => false
	
	has_and_belongs_to_many :authors, join_table: :documents_authors
	has_many :citations, dependent: :destroy, autosave: true
	has_many :document_files, dependent: :destroy, autosave: true
	
	accepts_nested_attributes_for :citations
	accepts_nested_attributes_for :authors
	accepts_nested_attributes_for :document_files
end
