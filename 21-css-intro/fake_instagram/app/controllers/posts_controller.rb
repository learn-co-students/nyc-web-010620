class PostsController < ApplicationController
  def index
    @posts = Post.all 
  end
  def show 
    @post = Post.find(params[:id])
  end
  def new 
    @post = Post.new
    @users = User.all
  end
  def create 
    # check if the post is valid
    # If it's not valid re-send the form with the error message
    # If it is valid, redirect to the show page as normal 
    @post = Post.new(post_params)
    if @post.save
      flash[:message] = "user successfully created"
      redirect_to post_path(@post)
    else
      flash.now[:message] = @post.errors.full_messages[0]
      @users = User.all
      render :new
    end
  end

  def edit 
    @post = Post.find(params[:id])
  end
  def update
    post = Post.find(params[:id])
    post.update(post_params)
    redirect_to post_path(post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end
end
