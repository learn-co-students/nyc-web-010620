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

  def average_trip_price
    total = self.rides.sum do |ride|
      ride.price
    end

    total / self.rides.length.to_f

    # self.rides.reduce(0) do |agg, ride|
    #   agg + (ride.price / self.rides.length)
    # end
  end

  def self.most_drivers
    Passenger.all.max_by do |passenger|
      passenger.drivers.uniq.count
    end
    
    # output: Passenger instance
  end


end

# - [ ] `#average_trip_price` - return the average expense of this passenger's rides
# - [ ] `.most_drivers` - return the passenger who has had the most unique drivers
