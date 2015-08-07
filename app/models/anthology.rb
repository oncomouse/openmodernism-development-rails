class Anthology < ActiveRecord::Base
	has_and_belongs_to_many :documents, join_table: :anthologies_documents
end
