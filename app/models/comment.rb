class Comment < ActiveRecord::Base
  belongs_to :idea, counter_cache: true
  belongs_to :user


  def idea_id
     idea.id
	end

end
