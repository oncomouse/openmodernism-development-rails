class Author < ActiveRecord::Base
	has_and_belongs_to_many :documents, join_table: :documents_authors
end
