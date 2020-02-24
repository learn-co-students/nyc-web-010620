class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.integer :year
      t.string :title
      t.integer :score
      t.string :imageUrl

      t.timestamps
    end
  end
end
