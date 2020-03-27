import React, { Component } from 'react';
import { connect } from 'react-redux';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { fetchSushiActionCreator, increaseMoneyActionCreator } from './actionCreators'


// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    moolahInput: ''
  }

  componentDidMount() {
    this.props.fetchSushis()
  }

  handleMoolahChange = (e) => {
    this.setState({ moolahInput: e.target.value })
  }

  handleMoolahSubmit = (e) => {
    e.preventDefault();
    this.props.increaseMoney(parseInt(this.state.moolahInput, 10))
    this.setState({ 
      // money: this.state.money + parseInt(this.state.moolahInput, 10),
      moolahInput: ''
    })
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleMoolahSubmit}>
          <input type="text" value={this.state.moolahInput} onChange={this.handleMoolahChange}/>
          <button type="submit">Add Moolah</button>
        </form>
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushiActionCreator()),
    increaseMoney: amount => dispatch(increaseMoneyActionCreator(amount))
  }
}

export default connect(null, mdp)(App);