class AddCheckoutToMember < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :checkout, :string
  end
end
