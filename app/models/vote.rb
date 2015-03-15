class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :idea

  enum direction: { down: -1, up: 1 }

 def idea_id
    idea.id 
 end

end
