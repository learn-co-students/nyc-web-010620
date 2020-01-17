class AddWingsColumnToDragon < ActiveRecord::Migration[5.2]
  def change
    add_column :dragons, :wings, :boolean
  end
end
