import React from 'react'; 
import MonsterCard from './MonsterCard';
import {monsters as initialMonsters} from './monsters';
import { ContainerHeader, Container, StyledBtn } from './styledComponents';

// A KEY PROBLEM IS A ME PROBLEM 

class MonsterContainer extends React.Component{

    state = {
        monsters: [],
        startIndex: 0 
    }

    // faking LIFECYCLE METHODS ---> FRIYAY
    getAllMonsters = () => {
        // pretend we fetched here
        this.setState({ monsters: initialMonsters })
    }

    renderMonsters = () => {   
        return this.state.monsters
                .slice(this.state.startIndex, this.state.startIndex + 5)
                .map((monster, ind) => <MonsterCard key={ind} {...monster}/>)
    }

    changeIndex = (num)  => {
        this.setState({ startIndex: this.state.startIndex + num })
    }

    render(){
        const { monsters, startIndex } = this.state; 
        return (
            <Container>
                <ContainerHeader>Most Wanted</ContainerHeader>
                <button onClick={this.getAllMonsters}>GET MY MONSTERS</button>
                { this.renderMonsters() }
                <div>
                    {!!startIndex && !!monsters.length && <StyledBtn onClick={() => this.changeIndex(-5)}>Previous</StyledBtn>}
                    {monsters.length - startIndex > 5 && <StyledBtn onClick={() => this.changeIndex(5)}>Next</StyledBtn>}
                </div>
            </Container>
        )
    }

}

export default MonsterContainer; 
