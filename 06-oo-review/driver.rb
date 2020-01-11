class Driver
  attr_accessor :name, :rating, :car

  @@all = []

  def initialize(name, rating, car)
    @name = name
    @rating = rating
    @car = car

    @@all << self
  end

  def rides
    Ride.all.select do |ride|
      ride.driver == self
    end
  end

  def passengers
    self.rides.map do |ride|
      ride.passenger
    end
  end

  def self.all
    @@all
  end


end