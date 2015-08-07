class AddAnthologiesDocuments < ActiveRecord::Migration
	def change
		create_table :anthologies_documents do |t|
			t.integer :document_id
			t.integer :anthology_id
		end
	end
end
