class UsersController < ApplicationController
  before_action :authorized, except: [:new]
  # before_action :current_user, only: [:show]

  def index
    @users = User.all 
  end

  def show
    @user = current_user
  end

  def new
    @user = User.new
  end

  def edit
  end
  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to user_path(user)
  end
  def update
  end

  private
  def user_params
    params.require(:user).permit(:name, :age, :password)
  end
end
