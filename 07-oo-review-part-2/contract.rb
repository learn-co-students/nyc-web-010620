class Contract
  attr_accessor :thief, :artifact, :amount

  @@all = []

  def initialize(thief, artifact, amount)
    @thief = thief
    @artifact = artifact
    @amount = amount
    @@all << self
  end

  def self.all
    @@all
  end
end

# Thief -< Contracts >- Artifact