class Document < ActiveRecord::Base
	#property :id, Serial
	#property :metadata, Text, :lazy => false
	
	has_and_belongs_to_many :authors, join_table: :documents_authors
	has_many :citations
	
	#has n, :document_files
	#has_many :citations, :dependent => :destroy
	#has_many :document_files, :dependent => :destroy
end
