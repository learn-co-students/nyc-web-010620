class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.title }

    render json: movies
  end

  def update
    movie = Movie.find(params[:id])
    movie.update(movie_params)
  end

  def destroy
    movie = Movie.find(params[:id])

    movie.destroy
    
    render json: {status: "ok"}
  end

  def create
    movie = Movie.create(movie_params)

    render json: movie
  end
  
  private

  def movie_params
    params.require(:movie).permit(:score, :year, :imageUrl, :title)
  end

end
