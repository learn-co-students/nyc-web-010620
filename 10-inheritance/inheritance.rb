require 'pry'
class Mammal

  attr_accessor :name

  def walk
    puts "I'm walking here!"
  end

  def be_furry(some_number)
    puts "I'm furry!"

    some_number.times do
      puts "DOIN IT!"
    end


  end

  def give_birth
    puts "Oh jeez!"
  end
end



class Marsupial < Mammal

    def hop
      puts "Oi mate! I'm hoppin' 'ere!"
    end

    def beef
      return "McSteaker"
    end

    def be_furry
      puts "I'm Australian! And I'm furry!"
      super(3)
    end
end


class Primate < Mammal
    def hunt
      puts "I'm gettin' me some food!!"
    end
end

mars = Marsupial.new
primate = Primate.new

binding.pry
