class Vote < ActiveRecord::Base
  belongs_to :users
  belongs_to :ideas

  enum direction: { down: -1, up: 1 }

end
