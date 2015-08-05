class CreateDocuments < ActiveRecord::Migration
	def change
		create_table :documents do |t|

			t.text :metadata, null: false
			t.timestamps null: false
		
		end
	end
end
