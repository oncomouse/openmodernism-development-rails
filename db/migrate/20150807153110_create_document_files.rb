class CreateDocumentFiles < ActiveRecord::Migration
	def change
		create_table :document_files do |t|

			t.timestamps null: false
			t.text :contents
			t.string :file_path
			t.boolean :ocr
			t.boolean :source_scan
			t.string :type, default: "md"
		end
	end
end
