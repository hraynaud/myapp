class IdeasController < ApplicationController
 respond_to :json, :html

def index
	@ideas = Idea.all.limit(10)
		respond_with(@ideas)
end

 def create
   @idea = Idea.create(idea_params)
	 if @idea
     render json: {"everything":"is alright"}
   else
		head :unprocessable_entity 
	 end 
 end



def idea_params
	params.require(:idea).permit(:body, :title, :offices, :location_type)
end

end
