import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [], // an array of id's of eaten sushis
    money: 50,
    moolahInput: ''
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  handleConsumption = (price, id) => {
    if(this.state.eatenSushis.includes(id)) return //Exit

    if(this.state.money >= price) {
      let newAte = [...this.state.eatenSushis]
      newAte.push(id)

      this.setState(prevState => {
        return {eatenSushis: [...prevState.eatenSushis, id], money: prevState.money - price}
      }) 
    } else {
      alert("NOPE. Come back with more money")
    }
  }

  handleMoolahChange = (e) => {
    this.setState({ moolahInput: e.target.value })
  }

  handleMoolahSubmit = (e) => {
    e.preventDefault();
    this.setState({ 
      money: this.state.money + parseInt(this.state.moolahInput),
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
        <SushiContainer sushis={this.state.sushis} consume={this.handleConsumption} eatenSushis={this.state.eatenSushis}/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
      </div>
    );
  }
}

export default App;