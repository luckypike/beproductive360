class SorceryCore < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :phone, null: false
      t.string :crypted_password
      t.string :salt
      t.string :token

      t.timestamps
    end

    add_index :users, :phone, unique: true
  end
end
