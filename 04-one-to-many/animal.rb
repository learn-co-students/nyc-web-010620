class Animal
  attr_reader :species
  attr_accessor :name, :weight, :zoo

  @@all = []

  def initialize(name, species, weight, zoo)
    @name = name
    @species = species
    @weight = weight
    @zoo = zoo

    @@all << self
  end

  def self.all
    @@all
  end
end

# name
# species
# weight