require 'pry'
require_relative './zoo.rb'
require_relative './animal.rb'

zoo1 = Zoo.new("Bronx Zoo", 100, "555-888-8888", 700)
zoo2 = Zoo.new("San Diego Zoo", 500, "555-888-7777", 430)
zoo3 = Zoo.new("Jersey Zoo", 30, "555-444-8888", 1200)
zoo4 = Zoo.new("Queens Zoo", 75, "342-666-8888", 8530)

a1 = Animal.new("Bobo", "Bear", 305, zoo1)
# zoo1.purchase_animal(a1)

a2 = Animal.new("Anna", "Bear", 323, zoo3)
# zoo3.purchase_animal(a2)

a3 = Animal.new("Edna", "Lion", 230, zoo4)
# zoo4.purchase_animal(a3)

a4 = Animal.new("Simba", "Lion", 247, zoo1)
# zoo1.purchase_animal(a4)

a5 = Animal.new("Samuel", "Rhesus Monkey", 40, zoo2)
# zoo2.purchase_animal(a5)

a6 = Animal.new("Ernest", "Seal", 90, zoo3)
# zoo3.purchase_animal(a6)

a7 = Animal.new("Juniper", "Hawk", 20, zoo2)
# zoo2.purchase_animal(a7)



binding.pry
