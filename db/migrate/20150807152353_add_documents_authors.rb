class AddDocumentsAuthors < ActiveRecord::Migration
	def change
		create_table :documents_authors do |t|
			t.integer :document_id
			t.integer :author_id
		end
	end
end
