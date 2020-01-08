```rb
larry = {
  name: "Larry Kovacs",
  age: 34
}

amy = {
  name: "Amy Chen",
  age: 26
}

chris = {
  nam: "Chris Smith",
  age: 6
}

# gives us behaviors for our hashes...kinda
def say_hi(person)
  puts "Hi, my name is #{person[:name]} and I am #{person[:age]} years old."
end


def createPerson(name, age)
  {name: name, age: age}
end

class Cake

  # attr_reader :calories, :frosting, :type, :layers
  # attr_writer :calories, :frosting, :type, :layers

  attr_accessor :calories, :frosting, :type, :layers

  # allows us to assign attributes to an instance when it is created
  def initialize(frosting, type, layers, calories)

    @frosting = frosting
    @type = type
    @layers = layers
    @calories =  calories

    @eaten = false
  end

  # instance method
  # def calories
  #   @calories
  # end

  # def frosting
  #   @frosting
  # end

  # def calories=(new_calories)
  #   @calories = new_calories
  # end  

  # def frosting=(new_frosting)
  #   @frosting = new_frosting
  # end

  def squish
    puts "#{@type} is going squish squish"
  end

end

# frosting - string
# type - string
# layers - integer
# calories - float

```