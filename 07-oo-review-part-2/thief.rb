class Thief
  attr_accessor :name, :alias, :rating

  @@all = []

  def initialize(name, alias, rating)
    @name = name
    @alias = alias
    @rating = rating
    @@all << self
  end

  def self.all
    @@all
  end

  def contracts
    Contract.all.select do |contract|
      contract.thief == self
    end
  end

  def artifacts
    # array of contracts -> array of artifacts
    self.contracts.map do |contract|
      contract.artifact
    end
  end
end

# thief1.contracts
# thieft1.artifacts