class Battle < ActiveRecord::Base
  belongs_to :dragon
  belongs_to :knight
end