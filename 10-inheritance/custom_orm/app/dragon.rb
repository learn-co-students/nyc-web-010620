class Dragon
  DB = SQLite3::Database.new("./db/database.db")

  attr_accessor :name, :color, :size, :knights_slain, :id

  def initialize(name, color, size, knights_slain, id = nil)
    @name = name
    @color = color
    @size = size
    @knights_slain = knights_slain
    @id = id
  end

  def self.all
    dragon_data = DB.execute("
      SELECT *
      FROM dragons;
    ")
    dragon_data.map do |row|
      Dragon.new(row[1], row[2], row[3], row[4], row[0])
    end
  end

  def self.find(id)
    dragon_data = DB.execute("
      SELECT *
      FROM dragons
      WHERE id=#{id};
    ")

    dragon_data = dragon_data.flatten

    Dragon.new(dragon_data[1], dragon_data[2], dragon_data[3], dragon_data[4], dragon_data[0])
  end

  def save
    DB.execute("
      INSERT INTO dragons(name, color, size, knights_slain)
      VALUES('#{@name}', '#{@color}', #{@size}, #{@knights_slain});
    ")
  end
end