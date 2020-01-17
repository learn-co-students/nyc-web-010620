class CreateBattles < ActiveRecord::Migration[5.2]
  def change
    create_table :battles do |t|
      t.string :location
      t.date :date
      t.integer :dragon_id
      t.integer :knight_id
      
      t.timestamps
    end
  end
end
