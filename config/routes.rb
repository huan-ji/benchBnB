Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :benches, only: [:index, :create] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create]
  end

  root to: "static_pages#root"
end
