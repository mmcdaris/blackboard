class Board < ActiveRecord::Base
  attr_accessible :name, :population
  has_many :users
end
