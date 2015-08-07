class AddReferenceToDocumentFiles < ActiveRecord::Migration
  def change
    add_reference :document_files, :document, index: true
    add_foreign_key :document_files, :documents
  end
end
