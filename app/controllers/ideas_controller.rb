class IdeasController < ApplicationController
 respond_to :json, :html

def index
	  @ideas = Idea.all
		respond_with(@ideas)
end


def default_serializer_options
  {root: false}
end

end
