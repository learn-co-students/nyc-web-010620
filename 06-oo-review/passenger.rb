class Passenger
  attr_accessor :name, :rating

  @@all = []

  def initialize(name, rating)
    @name = name
    @rating = rating
    
    @@all << self
  end

  def self.all
    @@all
  end

  def rides
    Ride.all.select do |ride|
      ride.passenger == self
    end
  end

  def drivers
    self.rides.map do |ride|
      ride.driver
    end
  end


end