class AddReferenceToCitations < ActiveRecord::Migration
  def change
    add_reference :citations, :document, index: true
    add_foreign_key :citations, :documents
  end
end
