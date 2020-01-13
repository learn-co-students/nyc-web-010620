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

  def average_travel_time
    total_travel_time = self.rides.sum do |ride|
      ride.duration
    end

    total_travel_time / self.rides.count.to_f
  end

  def most_expensive_ride
    # get all the rides for this driver
    # go through all the rides, figure their prices
    # return the ride with the highest price

    # array of rides -> array of prices
    # prices = self.rides.map do |ride|
    #   ride.price
    # end

    # max_price = prices.max

    # self.rides.find do |ride|
    #   ride.price == max_price
    # end

    self.rides.max_by do |ride|
      ride.price
    end

    # highest_price = 0
    # highest_ride = nil

    # self.rides.each do |ride|
    #   if ride.price > highest_price
    #     highest_ride = ride
    #     highest_price = ride.price
    #   end
    # end

    # highest_ride
  end

  def self.all
    @@all
  end


end