require 'pry'
# Write your code here!

planets = [
  {name: "Mars", distance: 43}, 
  {name: "Earth", distance: 562}, 
  {name: "Alpha Centauri", distance: 1000}, 
  {name: "Saturn", distance: 384}, 
  {name: "Titan", distance: 97}
]

def planet_names(planets)
  # new_array = []

  # planets.each do |planet|
  #   new_array << planet[:name]
  # end

  # new_array

  planets.map do |planet|
    planet[:name]
  end
end

def print_planet_info(planets)
  planets.each do |planet|
    puts planet[:name] + " is a planet and is " + planet[:distance].to_s + " miles away"
  end
end

# write a method that returns ONLY the planets whose distance is greater than 500
def far_planets(planets)
  # new_array = []

  # planets.each do |planet|
  #   if planet[:distance] > 500
  #     new_array << planet
  #   end
  # end

  # new_array

  planets.select do |planet|
    planet[:distance] > 500
  end
end

# write a method that returns all numbers in an array that are between 3 and 9

def between(array, low, high)
  array.select do |num|
    num > low && num < high
  end
end

# between([8,2,7,6,1,17,5,3], 3, 9) # => [8,7,6,5]



# bob = {
#   name: "Robert",
#   age: 24,
#   hometown: "New York, NY",
#   siblings: [
#     {name: "John", age: 32}, 
#     {name: "Ableton", age: 53}
#   ]
# }
binding.pry
