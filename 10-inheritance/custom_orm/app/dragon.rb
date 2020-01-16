class Dragon
  DB = SQLite3::Database.new("./db/database.db")

  attr_accessor :name, :color, :size, :knights_slain, :id

  def initialize(properties)
    @name = properties[:name]
    @color = properties[:color]
    @size = properties[:size]
    @knights_slain = properties[:knights_slain]
    @id = properties[:id]
  end

  def self.all
    dragon_data = DB.execute("
      SELECT *
      FROM #{self.to_s.downcase}s;
    ")
    dragon_data.map do |row|
      self.new(
        knights_slain: row[4], 
        name: row[1], 
        color: row[2], 
        size: row[3], 
        id: row[0]
      )
    end
  end

  def self.find(id)
    dragon_data = DB.execute("
      SELECT *
      FROM #{self.to_s.downcase}s
      WHERE id=#{id};
    ")

    dragon_data = dragon_data.flatten

    Dragon.new(
        knights_slain: dragon_data[4], 
        name: dragon_data[1], 
        color: dragon_data[2], 
        size: dragon_data[3], 
        id: dragon_data[0]
      )
  end

  def save
    DB.execute("
      INSERT INTO dragons(name, color, size, knights_slain)
      VALUES('#{@name}', '#{@color}', #{@size}, #{@knights_slain});
    ")
  end
end
