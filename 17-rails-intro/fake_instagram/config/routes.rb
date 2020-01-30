Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  # get '/users/posts'
  # get all my users and then get all the posts for all my users
  # get '/users/:id'
  # get all my users and then get a user with a specific id
  get '/posts', to: 'posts#index'
  # get all posts
end
