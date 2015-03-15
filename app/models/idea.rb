class Idea < ActiveRecord::Base
  belongs_to :user
	has_many :comments
	has_many :votes

	enum status: [:considering, :planned, :in_progress, :completed, :rejected]
end
