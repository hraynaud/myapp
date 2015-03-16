class Api::StatusesController < ApplicationController
	respond_to :json

	def index
   
		@stats = Idea.statuses.map do |k,v|
			{k => $redis.get("status:#{k}")}
		end

		respond_with(@stats)
	end

end
