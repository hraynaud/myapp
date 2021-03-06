class Idea < ActiveRecord::Base
  belongs_to :user
	has_many :comments
	has_many :votes

	enum status: [:considering, :planned, :in_progress, :completed, :rejected]


  def up_votes
		votes.up.count
	end

  def dow_votes
		votes.down.count
	end
end
