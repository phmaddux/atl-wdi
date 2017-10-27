class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :favorite_color
      t.integer :age

      t.timestamps
    end
  end
end
