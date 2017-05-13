Rails.application.routes.draw do
  root 'home#index'

  resources :weather_inquiry, only: [:index]
end
