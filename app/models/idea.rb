class Idea < ActiveRecord::Base
  belongs_to :user

	enum status: [:considering, :planned, :in_progress, :completed, :rejected]
end
