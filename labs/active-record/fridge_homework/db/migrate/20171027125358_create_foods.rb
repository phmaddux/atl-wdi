class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :weight
      t.boolean :vegan
      t.references :fridge, foreign_key: true

      t.timestamps
    end
  end
end
