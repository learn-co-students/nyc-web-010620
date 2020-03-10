import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';
import { StyledApp } from './styledComponents';

function App() {


  const clickHandler = event => {
    // to save event data 
    // opt 1
    event.persist()
    // opt 2
    let type = event.type

    setTimeout(() => {
      console.log(event.type)
      console.log('type var', type)
    }, 2000)
  }

  const intLogger = int => {
    console.log(int)
  }

  return (
    <StyledApp>
      <Navbar />
      <button onClick={() => intLogger(47)}>Whats good in the neighborhood?</button>
      <MonsterContainer />
    </StyledApp>
  );
}

export default App;


// event handlers!
// onClick={() => intLogger(47)}
// onClick={clickHandler}