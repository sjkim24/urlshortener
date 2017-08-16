Rails.application.routes.draw do
  root to: "static#index"
  
  namespace :api, defaults: { format: :json } do
    resources :shortened_urls, only: [:create]
    get "shortened_urls/:short_url", :to => "shortened_urls#redirect_to_original_link"
  end
end
