import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MonsterContainer />
    </div>
  );
}

// default export 
export default App;

// named exports
// const myName = 'caryn'
// export { App, myName };
