class Cake
  attr_accessor :calories, :frosting, :type, :layers

  @@all = []

  def initialize(frosting, type, layers, calories)

    @frosting = frosting
    @type = type
    @layers = layers
    @calories =  calories

    @eaten = false

    @@all << self
  end

  def self.vanilla_cakes
    @@all.select do |cake|
      cake.frosting == "Vanilla"
    end
  end

  def self.all
    @@all
  end

  # def self.beef
  #   puts "CLASSY BEEF"
  # end

  # def throw
  #   self.explode
  #   self.squish
  # end

  # def explode
  #   puts "#{@type} is exploding" 
  # end

  def squish
    puts "#{@type} is going squish squish"
  end

end
