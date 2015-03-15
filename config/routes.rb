Rails.application.routes.draw do
  root to: "ideas#index"
  devise_for :users


   resources :ideas
   
	 namespace "api",:constraints => { :format => 'json' } do

		 resources :offices
	 end

end
