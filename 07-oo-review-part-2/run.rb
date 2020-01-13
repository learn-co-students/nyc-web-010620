require 'pry'
require_relative './driver.rb'
require_relative './passenger.rb'
require_relative './ride.rb'

# require_relative './thief.rb'
# require_relative './contract.rb'
# require_relative './artifact.rb'


driver1 = Driver.new("George Kastanza", 3.82, "Chrysler La Baron")
driver2 = Driver.new("Kramer", 2.74, "Lincoln Town Car")
driver3 = Driver.new("Jerry Seinfeld", 4.89, "Red Saab")
driver4 = Driver.new("Dominic Torretto", 4.97, "Anything")

pass1 = Passenger.new("John Wick", 2.62)
pass2 = Passenger.new("Dwayne Johnson", 4.36)
pass3 = Passenger.new("Kevin Hart",4.92)
pass4 = Passenger.new("Stone Cold Steve Austin", 1.33)

ride1 = Ride.new(23, 15.02, pass1, driver2)
ride2 = Ride.new(8, 23.23, pass1, driver2)
ride3 = Ride.new(17, 5.82, pass2, driver3)
ride4 = Ride.new(29, 34.22, pass4, driver3)
ride5 = Ride.new(47, 19.89, pass3, driver1)
ride6 = Ride.new(60, 120.30, pass2, driver4)
ride7 = Ride.new(48, 46.57, pass3, driver2)
ride8 = Ride.new(34, 27.78, pass1, driver1)


binding.pry