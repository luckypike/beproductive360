class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :company
      t.string :job
      t.integer :session
      t.integer :object
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
