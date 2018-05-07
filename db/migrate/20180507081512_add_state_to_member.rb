class AddStateToMember < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :state, :integer, default: 1
  end
end
