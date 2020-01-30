require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

   # Index Action
   get '/users' do
    @users = User.all
     erb :index
   end

   get '/users/new' do
     erb :new
   end

   # Show Action
   get '/users/:id' do
    @user = User.find(params[:id])
    erb :show
   end

   post '/users' do
    user = User.create(params[:user])
    redirect "/users/#{user.id}"
   end

   get '/users/:id/edit' do
    @user = User.find(params[:id])
    erb :edit
   end

  patch '/users/:id' do
    user = User.find(params[:id])
    user.update(params[:user])
    redirect "/users/#{user.id}"
  end

  delete '/users/:id' do
    user = User.find(params[:id])
    @name = user.name
    user.destroy 
    erb :delete
  end


end
