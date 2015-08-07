# Regex: property (\:[^,]+), (.*)$ / t.\L$2 $1
class CreateCitations < ActiveRecord::Migration
	def change
		create_table :citations do |t|
			
			t.timestamps null: false
			t.string :container_title
			t.date :date
			t.string :volume
			t.string :issue
			t.string :publisher
			t.string :publisher_place
			t.string :page
	
			t.belongs_to :documents
		end
	end
end
