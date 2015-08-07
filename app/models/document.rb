class Document < ActiveRecord::Base
	has_and_belongs_to_many :authors, join_table: :documents_authors
	has_and_belongs_to_many :anthologies, join_table: :anthologies_documents
	has_many :citations, dependent: :destroy, autosave: true
	has_many :document_files, dependent: :destroy, autosave: true
	
	def before_save(record)
		YAML.load(d.metadata)['author'].each do |author|
			if nil? Author.find_by(given: record['given'], family: record['family'])
				aa = Author.new
				aa.from_json(JSON.generate(author))
				record.authors.push(aa)
			end
		end
	end
	
	accepts_nested_attributes_for :citations
	accepts_nested_attributes_for :authors
	accepts_nested_attributes_for :document_files
end
