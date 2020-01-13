class Ride
  attr_accessor :duration, :price, :passenger, :driver

  @@all = []

  def initialize(duration, price, passenger, driver)
    @duration = duration
    @price = price
    @passenger = passenger
    @driver = driver

    @@all << self
  end

  def self.all
    @@all
  end


end