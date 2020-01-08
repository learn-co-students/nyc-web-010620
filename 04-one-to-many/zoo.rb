# setup basic syntax
# read attributes
# write attributes
class Zoo
  attr_accessor :name, :entry_fee, :telephone_number, :size

  @@all = []

  def initialize(name, entry_fee, telephone_number, size)
    @name = name
    @entry_fee = entry_fee
    @telephone_number = telephone_number
    @size = size

    @@all << self
  end

  def self.all
    @@all
  end

  def self.sort_zoos_by_size
    Zoo.all.sort{ |zoo1, zoo2| zoo1.size <=> zoo2.size }
  end

  def self.get_affordable_zoos(price)
    # what are we iterating over?
    # type of iterator
    # how do i access the data i need to check?
    # Zoo.all.select { |zoo| zoo.entry_fee < price}
    self.all.select { |zoo| zoo.entry_fee < price}
  end

end



# name
# entry fee
# telepone_number
# size