import React from 'react'; 
import MonsterCard from './MonsterCard';
import {monsters as initialMonsters} from './monsters';
import { ContainerHeader, Container, StyledBtn } from './styledComponents';

// functional Syntax
// const MonsterContainer = () => {

class MonsterContainer extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         count: 100 
    //     }
    // }

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

    // handleClick = () => {
    //     // FUNCTIONAL SETSTATE GLORY
    //     this.setState(prevState => ({ count: prevState.count + 1 }) )
    //     this.setState(prevState => ({ count: prevState.count + 1 }) )
    //     this.setState(prevState => ({ count: prevState.count + 1 }) )
    // }


    // SEE DRYIFICATION BELOW
    changeIndex = (num)  => {
        this.setState({ startIndex: this.state.startIndex + num })
        // functional setState 
        // this.setState(prevState => ({ startIndex: prevState.startIndex + num }))
    }

    render(){
        console.log(this.state)
        const { monsters, startIndex } = this.state; 
        return (
            <Container>
                <ContainerHeader>Most Wanted</ContainerHeader>
                {/* <div style={{color: 'orange', fontSize: '2em'}}>MyCount: {this.state.count}</div> */}
                {/* <button onClick={this.handleClick}>ADD TO COUNT</button> */}
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


/**
 * PAGINATION GO BOOM ... options
 * - conditional on display of next button... if array.length - startingIndex < 5
 * - conditional in the method if nextIndex is beyond, throw alert 
 */



// DRYIFICATION 
// decreaseIndex = () => {
//     this.setState({ startIndex: this.state.startIndex - 5 })
// }

// increaseIndex = () => {
//     this.setState({ startIndex: this.state.startIndex + 5 })
// }