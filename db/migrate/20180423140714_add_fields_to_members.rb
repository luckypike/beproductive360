class AddFieldsToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :hotel, :string
    change_column :members, :object, :string
    change_column :members, :session, :string
  end
end
