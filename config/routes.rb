Rails.application.routes.draw do
   resources :users, only: [:index, :create, :show]
   
   # need to set up route for 
   # ShortenedUrlsController#redirect_to_original_link
end
