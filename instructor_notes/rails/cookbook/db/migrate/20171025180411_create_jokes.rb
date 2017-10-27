class CreateJokes < ActiveRecord::Migration[5.1]
  def change
    create_table :jokes do |t|
      t.string :setup
      t.string :punchline
      t.integer :dad_score
  end
end
