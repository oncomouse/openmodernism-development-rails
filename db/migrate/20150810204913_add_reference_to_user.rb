class AddReferenceToUser < ActiveRecord::Migration
  def change
    add_reference :anthologies, :user, index: true
    add_foreign_key :anthologies, :users
  end
end
