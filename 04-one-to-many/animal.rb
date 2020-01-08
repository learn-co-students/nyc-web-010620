class Animal
  attr_reader :species
  attr_accessor :name, :weight

  @@all = []

  def initialize(name, species, weight)
    @name = name
    @species = species
    @weight = weight

    @@all << self
  end

  def self.all
    @@all
  end
end

# name
# species
# weight