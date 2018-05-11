Rails.application.routes.draw do
  root 'pages#index'

  resources :members do
    collection do
      get :all
      get :list
    end

    post :accept, to: 'members#accept'
    post :reject, to: 'members#reject'
    post :reaccept, to: 'members#reaccept'
  end

  resources :lections do
    collection do
      get :list
    end
  end

  get :join, to: 'sessions#new'
  post :join, to: 'sessions#create'

  # devise_for :users, path: '', controllers: { sessions: :sessions }, path_names: { sign_in: :join, sign_out: :bye }
end
