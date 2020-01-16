class CreateDragons < ActiveRecord::Migration[5.2]
  def change
    create_table :dragons do |t|
      t.string :name
      t.string :color
      t.integer :size
      t.integer :knights_slain
 
      t.timestamps
    end
  end

  # def up
  #   create_table :dragons do |t|
  #     t.string :name
  #     t.string :color
  #     t.integer :size
  #     t.integer :knights_slain
 
  #     t.timestamps
  #   end
  # end

  # def down
  #   drop_table :dragons 
  # end
end
