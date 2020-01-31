class PostsController < ApplicationController
  def index
    @posts = Post.all 
  end
  def show 
    @post = Post.find(params[:id])
  end
  def new 
    @post = Post.new
  end
  def create 
    post = Post.create(post_params)

    byebug
  end

  def edit 
    @post = Post.find(params[:id])
  end
  def update
    byebug
    post = Post.find(params[:id])
    post.update(post_params)
    redirect_to post_path(post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end
end
