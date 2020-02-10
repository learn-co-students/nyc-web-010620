class SessionController < ApplicationController
  def new

  end

  def create
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      byebug
    session[:user_id] = @user.id 
    redirect_to user_path(@user)
    else
      # do some flash error handling to tell the user that their info was incorrect
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
