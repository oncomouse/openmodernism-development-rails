class Document < ActiveRecord::Base
	#property :id, Serial
	#property :metadata, Text, :lazy => false
	
	
	
	#has n, :citations
	#has n, :authors, :through => Resource
	#has n, :document_files
	#has_many :citations, :dependent => :destroy
	#has_many :document_files, :dependent => :destroy
end
