class IdeaSerializer < ActiveModel::Serializer
	attributes :id, :title, :body, :up_votes, :down_votes, :comments_count, :offices, :status
	has_one :user, serializer: UserForIdeaSerializer

end
