class AddFields2ToMemebers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :email, :string
    add_column :members, :date_arrival, :date
    add_column :members, :date_departure, :date
  end
end
