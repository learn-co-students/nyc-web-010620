import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';
import { StyledApp } from './styledComponents';
import CampaignContainer from './CampaignContainer';
import AddMonsterForm from './AddMonsterForm';

function App() {
  return (
    <StyledApp>
      <Navbar />
      <AddMonsterForm />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <MonsterContainer />
        <CampaignContainer monsters={[]}/>
      </div>
    </StyledApp>
  );
}

export default App;