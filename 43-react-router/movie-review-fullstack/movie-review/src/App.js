import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import {API_BASE} from './constants';
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount(){
    fetch(`${API_BASE}/movies`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data
      })
    })
  }


  // tools for control of which route to use : Switch and exact prop
  render(){
    return (
      <div className="App">
        <NavBar/> 
        <Switch>
          <Route path="/login" component={Login} /> {/* routerProps */}
          <Route path="/signup" component={Signup} />
          <Route path="/movies" render={routerProps => <MovieContainer {...routerProps} movies={this.state.movies}/>} />
          <Route path="/" render={() => <div>HOME</div>} />
        </Switch>
      </div>
    )
  }
}

export default App;