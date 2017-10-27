class RemoveDealershipFromCars < ActiveRecord::Migration[5.1]
  def change
    remove_column :cars, :dealership, :string
  end
end
