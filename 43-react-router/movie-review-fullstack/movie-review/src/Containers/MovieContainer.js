import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';
import { Route } from 'react-router-dom';

class MovieContainer extends React.Component {
  
  state = {
    selectedMovie: null
  }

  selectMovie = (id) => {
    // this.setState({
    //   selectedMovie: id
    // })
    console.log(this.props)
    this.props.history.push(`/movies/${id}`)
  }

  // when I click on a movie ==> update the path to /movies/:id 
  // remove all that state logic for selectedMovie and rely instead on the path 
  // at /movies ==> map over this.props.movies
  // at /movies/id ==> render MoviePage 
  // MoviePage needs to fetch the movie based on its URI

  render(){
    let selectedMovie = this.props.movies.find(movie => movie.id === this.state.selectedMovie)
    return (
      <div className="movie-container">
        <Route exact path="/movies/:id" component={MoviePage} />
        <Route exact path="/movies" render={() => this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)} />
      </div>
    );
  }
}

export default MovieContainer;