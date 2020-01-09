class Zoo
  attr_accessor :name, :entry_fee, :telephone_number, :size, :animals

  @@all = []

  def initialize(name, entry_fee, telephone_number, size)
    @name = name
    @entry_fee = entry_fee
    @telephone_number = telephone_number
    @size = size
    # @animals = []

    @@all << self
  end

  # def purchase_animal(animal)
  #   @animals << animal
  # end

  def animals
    Animal.all.select do |animal|
      self == animal.zoo
    end
  end


  def self.all
    @@all
  end

  def self.sort_zoos_by_size
    Zoo.all.sort{ |zoo1, zoo2| zoo1.size <=> zoo2.size }
  end

  def self.get_affordable_zoos(price)
    self.all.select { |zoo| zoo.entry_fee < price}
  end

end



# name
# entry fee
# telepone_number
# size