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

  componentDidMount(){
    fetch('http://localhost:6001/monsters')
        .then(res => res.json())
        .then(data => {
            console.log('fetch data', data)
            this.setState({ monsters: data })
        })
  }


  destroyMonster = id => {
    const newMonsters = this.state.monsters.filter(monster => monster.id !== id)
    this.setState({ monsters: newMonsters })
  }

  addMonsterToCampaign = id => {
    // console.log('adding to campaign',id)
    const newMonsters = this.state.monsters.map(monster => {
      if(monster.id === id){ monster.active = true }
      return monster
    })

    this.setState({ monsters: newMonsters })
  }

  addNewMonster = monsterObj => {
    this.setState({ monsters: [...this.state.monsters,  monsterObj ]})
  }

  render(){
    const campaignMonsters = this.state.monsters.filter( monster => monster.active );
    console.log('render', campaignMonsters)


    return (
      <StyledApp>
        <Navbar />
        <AddMonsterForm addNewMonster={this.addNewMonster}/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <MonsterContainer 
            monsters={this.state.monsters} 
            addMonsterToCampaign={this.addMonsterToCampaign}/>
          <CampaignContainer monsters={campaignMonsters} destroyMonster={this.destroyMonster}/>
        </div>
      </StyledApp>
    );
  }
}

export default App;