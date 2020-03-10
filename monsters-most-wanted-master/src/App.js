import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';
import { StyledApp, Container, ContainerHeader } from './styledComponents';

function App() {
  return (
    <StyledApp>
      <Navbar />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <MonsterContainer />
        <Container half>
          <ContainerHeader>ACTIVE CAMPAIGNS</ContainerHeader>
        </Container>
      </div>
    </StyledApp>
  );
}

export default App;