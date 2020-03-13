import React from 'react'; 
import MonsterCardFront from './MonsterCardFront';
import MonsterCardBack from './MonsterCardBack';

class MonsterCard extends React.Component {
    // const { name, difficulty, reward, img } = props;

    state = {
        front: true
    }

    componentWillUnmount(){
        alert('YOU VANQUISHED   ', this.props.name)
    }

    flipCard = () => {
        this.setState({ front: !this.state.front })
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {this.state.front 
                    ? <MonsterCardFront {...this.props} flipCard={this.flipCard}/>
                    : <MonsterCardBack {...this.props} flipCard={this.flipCard} handleClick={this.props.handleClick}/>
                }
            </div>
        )
    }
}

export default MonsterCard; 