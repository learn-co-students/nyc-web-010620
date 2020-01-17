class CreateKnights < ActiveRecord::Migration[5.2]
  def change
    create_table :knights do |t|
      t.string :name
      t.string :house
      t.string :weapon
      t.boolean :alive
 
      t.timestamps
    end
  end
end
