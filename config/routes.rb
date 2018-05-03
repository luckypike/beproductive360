Rails.application.routes.draw do
  root 'pages#index'

  resources :members do
    collection do
      get :all
    end
  end

  resources :lections

  get :join, to: 'sessions#new'
  post :join, to: 'sessions#create'

  # devise_for :users, path: '', controllers: { sessions: :sessions }, path_names: { sign_in: :join, sign_out: :bye }
end
