Rails.application.routes.draw do
  root to: "static#index"
  get '*path', to: 'static#index'
  # resources :shortened_urls, only: [:index, :create, :show, :new] 
  # get '/:short_url', :to => 'shortened_urls#redirect_to_original_link'
end
