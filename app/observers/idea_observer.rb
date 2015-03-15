class IdeaObserver < ActiveRecord::Observer

	def after_create(idea)
		base_key = "ideas:#{idea.id}"

		$redis.multi do
			#set base idea values
			$redis.hmset("#{base_key}","upVotes", "0", "downVotes", 0, "comments",  0, "status",  Idea.statuses[:considering])

			#set offices for idea
			$redis.sadd("#{base_key}:offices",idea.offices)


			#incr status for idea
			$redis.incr("status:#{Idea.statuses[:considering]}")

			#incr office counters
			idea.offices.each do |id|
				$redis.incr("offices:#{id}:ideas")
			end
		end
	end

	def before_save(idea)
		if idea.changes.include?(:status)
			 $redis.incr("status:#{idea.status}")
		end
	end

end
