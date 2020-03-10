import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';
import { StyledApp } from './styledComponents';

function App() {
  return (
    <StyledApp>
      <Navbar />
      <MonsterContainer />
    </StyledApp>
  );
}

// default export 
export default App;

// named exports
// const myName = 'caryn'
// export { App, myName };
