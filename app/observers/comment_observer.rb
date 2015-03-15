class CommentObserver < ActiveRecord::Observer
	def after_create(comment)
		base_key = "ideas:#{comment.idea_id}:comments"

		$redis.incr("#{base_key}")
	end

end
