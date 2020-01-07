require 'pry'
# Write your code here!




planets = [
  {name: "Mars", distance: 43}, 
  {name: "Earth", distance: 23}, 
  {name: "Alpha Centauri", distance: 1000}, 
  {name: "Saturn", distance: 15}, 
  {name: "Titan", distance: 97}
]

print_planet_info(planets)

def print_planet_info(planets)
  planets.each do |planet|
    puts planet[:name] + " is a planet and is " + planet[:distance].to_s + " miles away"
  end
end


binding.pry

# numbers = [1,2,3,4,5,6]

# numbers.each do |n|
#   double = n*2 
#   puts double
# end



# bob = {
#   name: "Robert",
#   age: 24,
#   hometown: "New York, NY",
#   siblings: [
#     {name: "John", age: 32}, 
#     {name: "Ableton", age: 53}
#   ]
# }