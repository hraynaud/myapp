class VoteObserver < ActiveRecord::Observer
	def after_create(vote)
		base_key = "ideas:#{vote.idea_id}:#{vote.direction}"
		$redis.incr("#{base_key}")
	end

end
