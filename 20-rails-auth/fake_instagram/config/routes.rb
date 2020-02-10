Rails.application.routes.draw do
  get 'session/new'
  get 'session/create'
  get 'session/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  #User Routes
  get '/users', to: 'users#index', as: "users"
  get '/signup', to: 'users#new', as: "new_user"
  post '/users', to: 'users#create'
  get '/profile', to: 'users#show', as: "user"

  get '/login', to: 'session#new'
  post '/sessions', to: 'session#create'
  delete '/logout', to: 'session#destroy'

  # Post Routes
  resources :posts, only: [:index, :show, :new, :create, :edit, :update]

end
