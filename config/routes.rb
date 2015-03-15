Rails.application.routes.draw do
  root to: "ideas#index"
  devise_for :users


   resources :ideas
end
