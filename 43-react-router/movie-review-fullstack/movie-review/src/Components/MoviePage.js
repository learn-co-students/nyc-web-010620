import React from 'react';
import NewReviewForm from './NewReviewForm';
import { API_BASE } from '../constants'

class MoviePage extends React.Component {
  state = {
    addingReview: false,
    movie: null
  }

  componentDidMount() {
    fetch(`${API_BASE}/movies/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({
        movie
      })
    })
  }

  toggleNewReviewForm = () => {
    this.setState((prevState) => ({ addingReview: !prevState.addingReview }))
  }

  renderSingleReview = (review) => {
    return (
      <div key={review.id} className="review-box">
        <div>{review.stars > 0 ? "⭐️".repeat(review.stars) : "👎🏽"}</div>
        <div>{review.content}</div>
        <div>
          <span className="review-author">According to {review.author_name}</span>
          <span className="review-trash" onClick={() => this.deleteReview(review.id)}> &emsp;  🚮</span>
        </div>

      </div>
    )
  }

  renderReviews = () => {
    return this.state.movie.reviews.length ? this.state.movie.reviews.map(review => this.renderSingleReview(review)) : "No reviews yet"
  }

  renderMovieInfo = () => {
    return (
      <>
        <img alt="movie poster" src={this.state.movie ? this.state.movie.img : ""} />
        <div className="movie-info">
            <h2>{this.state.movie.title}</h2>
            <h4>{this.state.movie.director}</h4>
            <div>{this.state.movie.year}</div>
        </div>
        <div className="reviews-container">
          <h2>Reviews</h2>
          <button onClick={this.toggleNewReviewForm}>{this.state.addingReview ? "Close Form" : "Open Form"}</button>
          {this.state.addingReview && <NewReviewForm movieId={this.state.movie.id} toggleNewReviewForm={this.toggleNewReviewForm}/>}
          {this.renderReviews()}
        </div>
      </>
    )
  }

  render() {
    console.log('movie page props', this.props, this.state)
    return (
      <div className="movie-page">
          <div onClick={() => this.props.history.goBack()} className="back-button">⬅️</div>
          {this.state.movie && this.renderMovieInfo()} 
      </div>
    );
  }
}

export default MoviePage;
