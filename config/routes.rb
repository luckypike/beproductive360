Rails.application.routes.draw do
  resources :members
  root 'pages#index'

  get :join, to: 'sessions#new'
  post :join, to: 'sessions#create'

  # devise_for :users, path: '', controllers: { sessions: :sessions }, path_names: { sign_in: :join, sign_out: :bye }
end
