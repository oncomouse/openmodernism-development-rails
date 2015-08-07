class AddAuthors < ActiveRecord::Migration
	def change
		create_table :authors do |t|
			t.string :given
			t.string :given_use, :default => nil
			t.string :family
			t.date :birth
			t.date :death
		end
		
		create_table :documents_authors do |t|
			t.belongs_to :documents, index: true
			t.belongs_to :authors, index: true
		end
	end
end
