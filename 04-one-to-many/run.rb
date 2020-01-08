require 'pry'
require_relative './zoo.rb'

zoo1 = Zoo.new("Bronx Zoo", 100, "555-888-8888", 700)
zoo2 = Zoo.new("San Diego Zoo", 500, "555-888-7777", 430)
zoo3 = Zoo.new("Jersey Zoo", 30, "555-444-8888", 1200)
zoo4 = Zoo.new("Queens Zoo", 75, "342-666-8888", 8530)

binding.pry
