class ChangeContentsInAnthology < ActiveRecord::Migration
	def change
		change_column :anthologies, :toc, :text, default: "[]"
	end
end
