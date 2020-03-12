import React from 'react';
import './App.css';
import MonsterContainer from './MonsterContainer';
import Navbar from './Navbar';
import { StyledApp } from './styledComponents';
import CampaignContainer from './CampaignContainer';
import AddMonsterForm from './AddMonsterForm';

class App extends React.Component {
  state = {
    monsters: []
  }

  // create a callback here to find a monster (by id), set its active key to true, and set state with my new monsters

  addMonsterToCampaign = id => {
    // find the right monster
    // update the active key
    // set state with new monsters

    // NEW SCHOOL
    const newMonsters = this.state.monsters.map(monster => {
      if(monster.id === id){ monster.active = true }
      return monster
    })

    // OLD SCHOOL
    // const targetIndex = this.state.monsters.findIndex( monster => monster.id === id ) 
    // const newTarget = {...this.state.monsters[targetIndex]}
    // newTarget.active = true
    // const newMonsters = [...this.state.monsters]
    // newMonsters[targetIndex] = newTarget

    this.setState({ monsters: newMonsters })
  }

  getAllMonsters = () => {
    fetch('http://localhost:6001/monsters')
        .then(res => res.json())
        .then(data => {
            console.log('fetch data', data)
            this.setState({ monsters: data })
        })
  }

  addNewMonster = monsterObj => {
    this.setState({ monsters: [ monsterObj, ...this.state.monsters ]})
  }

  render(){
    const campaignMonsters = this.state.monsters.filter( monster => monster.active );

    return (
      <StyledApp>
        <Navbar />
        <AddMonsterForm addNewMonster={this.addNewMonster}/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <MonsterContainer 
            monsters={this.state.monsters} 
            getAllMonsters={this.getAllMonsters}
            addMonsterToCampaign={this.addMonsterToCampaign}/>
          <CampaignContainer monsters={campaignMonsters}/>
        </div>
      </StyledApp>
    );
  }
}

export default App;