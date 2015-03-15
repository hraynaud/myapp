class Idea < ActiveRecord::Base
  belongs_to :user
	has_many :comments
	enum status: [:considering, :planned, :in_progress, :completed, :rejected]
end
