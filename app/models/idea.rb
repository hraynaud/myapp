class Idea < ActiveRecord::Base
  belongs_to :user
	enum status: [:considering, :planned, :in_progress, :completed, :rejected]

	def self.json_ify
		all.map.as_json( include:{
			[user: {only: [:first_name, :last_name, :office_id] }
		})
	end
  
end
