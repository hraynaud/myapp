class Api::OfficesController < ApplicationController
 respond_to :json

def index
@stats =	Office.all.map do |o|
	{office_id: o.id, city: o.city, name: o.name, ideas: $redis.get("offices:#{o.id}:ideas")}
	end
respond_with(@stats)
end

end
