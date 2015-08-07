class CreateAnthologies < ActiveRecord::Migration
	def change
		create_table :anthologies do |t|

			t.timestamps null: false
			t.string :title
			t.text :toc
		end
	end
end
