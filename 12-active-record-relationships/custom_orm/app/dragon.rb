class Dragon < ActiveRecord::Base
  has_many :battles
  has_many :knights, through: :battles
end
