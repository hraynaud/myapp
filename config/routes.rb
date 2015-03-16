Rails.application.routes.draw do
  root to: "ideas#index"
  devise_for :users

	get  "api/statuses", to: "api/statuses#index" 

   resources :ideas
   
	 namespace "api",:constraints => { :format => 'json' } do

		 resources :offices
	 end

end
