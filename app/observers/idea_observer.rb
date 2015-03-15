class IdeaObserver < ActiveRecord::Observer
  def after_create(idea)
    base_key = "ideas:#{idea.id}"
		$redis.multi do
			#set base idea values
			$redis.hmset("#{base_key}","upVotes", "0", "downVotes", 0, "comments" 0, "status",  Idea.considering)
			
			#set offices for idea
			$redis.sadd("#{base_key}:offices",idea.offices.map(:as_json)


			#incr status for idea
			$redis.incr("status:#{Idea.statuses[:considering]}", counter)

      #incr office counters
			idea.offices.map(&:id) do |id|
				$redis.incr("offices:#{id}:ideas","counter")
			end
	end
end
