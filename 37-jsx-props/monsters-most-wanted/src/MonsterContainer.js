import React from 'react'; 
import MonsterCard from './MonsterCard';
import {monsters} from './monsters';

// functional Syntax
// const MonsterContainer = () => {

class MonsterContainer extends React.Component{

    renderAllMonsters = () => { // this doesn't break nicely until events 
        return monsters.map((monster, ind) => <MonsterCard key={ind} {...monster}/>)
    }

    render(){
        return (
            <div>

                {this.renderAllMonsters() // this = instance of MonsterContainer 
                }
            </div>
        )
    }

}

export default MonsterContainer; 