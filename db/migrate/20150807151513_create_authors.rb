class CreateAuthors < ActiveRecord::Migration
	def change
		create_table :authors do |t|
			t.string :given
			t.string :given_use, :default => nil
			t.string :family
			t.date :birth
			t.date :death
		end
	end
end
