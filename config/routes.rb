Rails.application.routes.draw do
  root to: "shortened_urls#index"
  resources :shortened_urls, only: [:index, :create, :show, :new]
   
 # need to set up route for 
 # ShortenedUrlsController#redirect_to_original_link
end
