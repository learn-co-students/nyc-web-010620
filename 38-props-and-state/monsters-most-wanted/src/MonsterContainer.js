import React from 'react'; 
import MonsterCard from './MonsterCard';
import {monsters} from './monsters';
import { ContainerHeader, Container } from './styledComponents';

// functional Syntax
// const MonsterContainer = () => {

class MonsterContainer extends React.Component{

    renderAllMonsters = () => { // this doesn't break nicely until events 
        return monsters.map((monster, ind) => <MonsterCard key={ind} {...monster}/>)
    }

    render(){
        return (
            <Container>
                <ContainerHeader>Most Wanted</ContainerHeader>
                {this.renderAllMonsters() // this = instance of MonsterContainer 
                }
            </Container>
        )
    }

}

export default MonsterContainer; 