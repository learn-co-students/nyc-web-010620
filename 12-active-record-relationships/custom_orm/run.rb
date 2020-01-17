require './config/environment'
binding.pry

system("clear")


def prompt_user
  system("clear")
  puts "What would you like to do?"
  puts "1. Create a dragon"
  puts "2. See all dragons"
  puts "3. See one dragon"
  puts "4. Exit"

  user_input = gets.chomp.to_i
  action_router(user_input)
end


def action_router(input)
  case input
  when 1
    make_dragon
  when 2
    print_dragons
  when 3
    find_dragon
  when 4
    return
  end
  puts "(press any key to return to the main menu)"
  gets.chomp
  prompt_user
end

def make_dragon
  puts "What is thy dragon's name?"
  name = gets.chomp

  puts "What color is thy dragon?"
  color = gets.chomp

  puts "How big is thy dragon?"
  size = gets.chomp.to_i

  puts "How many knights has thy dragon slain?"
  knights_slain = gets.chomp.to_i

  dragon = Dragon.new(name: name, color: color, size: size, knights_slain: knights_slain)
  dragon.save

  puts "Thy dragon is bourne!"
end

def print_dragons
  Dragon.all.each do |dragon|
    puts " ---------------  "
    puts "Name: #{dragon.name}"
    puts "Color: #{dragon.color}"
    puts "Size: #{dragon.size}"
    puts "Knights Slain: #{dragon.knights_slain}"
    puts " ---------------  "
  end
end

def find_dragon
  puts "What is thy dragon's id?"

  id = gets.chomp.to_i

  dragon = Dragon.find(id)

  puts " ---------------  "
  puts "Name: #{dragon.name}"
  puts "Color: #{dragon.color}"
  puts "Size: #{dragon.size}"
  puts "Knights Slain: #{dragon.knights_slain}"
  puts " ---------------  "
end


puts "🐉 Rawr! Welcome to Dragon World! 🐉"
puts "(press any key to continue)"
gets.chomp
prompt_user
