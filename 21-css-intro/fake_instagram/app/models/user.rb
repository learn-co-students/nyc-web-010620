class User < ApplicationRecord
    has_many :posts
    validates :name, presence: true
    validate :minimum_age
    
    def minimum_age
    if age < 18
      errors.add(:age, "must be greater than 17")
    end
  end
end
