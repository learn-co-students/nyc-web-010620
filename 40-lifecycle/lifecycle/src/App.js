import React from 'react';
import './App.css';

// import LifeCycleApp from "./lifecycle/LifeCycleApp"
import TickerContainer from "./ticker/TickerContainer"

function App() {
  return (
    <div className="App">  
     {/* <LifeCycleApp /> */}
     <TickerContainer />
    </div>
  );
}

export default App;