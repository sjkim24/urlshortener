Rails.application.routes.draw do
  root to: "static#index"
  
  namespace :api, defaults: { format: :json } do
    resources :shortened_urls, only: [:create]
  end
  
  get "/:short_url", to: "api/shortened_urls#redirect_to_original_link"
end
