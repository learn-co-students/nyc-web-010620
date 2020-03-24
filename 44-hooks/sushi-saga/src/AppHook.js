import React, { Component, useState, useEffect } from 'react';
// import SushiContainer from './containers/SushiContainer';
import SushiContainer from './containers/SushiContainerHook';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const App = props => {

  const [ sushis, setSushis ] = useState([])
  const [ eatenSushis, setEatenSushis ] = useState([])
  const [ budget, setBudget ] = useState(105)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushis(data)
    })
  }, [])

  const eatSushi = (id, price, eaten ) => {
    if(price <= budget && !eaten){ 
      let newSushis = sushis.map(sushi => { 
        if(sushi.id === id){ 
          sushi.eaten = true
        }
        return sushi 
      })
    
      // this.setState({ 
      //   sushis: newSushis,
      setSushis(newSushis)
      //   eatenSushis: [...eatenSushis, id],
      setEatenSushis([...eatenSushis, id])
      //   budget: budget - price
      setBudget(budget - price )
      // })
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }
  

  return (
      <div className="app">
        <SushiContainer sushis={sushis} eatSushi={eatSushi} />
        <Table eatenSushis={eatenSushis} budget={budget} />
      </div>
    );
}

export default App;