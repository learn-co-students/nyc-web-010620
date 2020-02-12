Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root "application#welcome"

  #User Routes
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  # get '/users/posts'
  # get all my users and then get all the posts for all my users
  # get '/users/:id'
  # get all my users and then get a user with a specific id


  # Post Routes
  resources :posts, only: [:index, :show, :new, :create, :edit, :update]
  # get '/posts', to: 'posts#index', as: "posts"
  # get '/posts/:id', to: 'posts#show'
  # get '/posts/new', to: 'posts#new', as: "new_post"
  # post '/posts', to: 'posts#create'
  # get all posts
end
