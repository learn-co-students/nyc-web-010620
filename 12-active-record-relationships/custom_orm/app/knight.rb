class Knight < ActiveRecord::Base
  has_many :battles
  has_many :dragons, through: :battles
end



def method(something)
  puts something
end

def other_thing(something, stuff)
  puts something
  puts stuff
end

a = "hi"
b = "blah"

other_thing(b, a)

def stuff (a, b = 'hi')

end

def stuff(something, blah: 'bye')

end

stuff('hi')

def has_many(table, through: nil)
  
end