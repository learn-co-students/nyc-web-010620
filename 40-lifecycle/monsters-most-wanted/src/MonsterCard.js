import React from 'react'; 
import MonsterCardFront from './MonsterCardFront';
import MonsterCardBack from './MonsterCardBack';

class MonsterCard extends React.Component {
    // const { name, difficulty, reward, img } = props;

    state = {
        front: true
    }

    flipCard = () => {
        this.setState({ front: !this.state.front })
    }

    render(){
        return (
            <div>
                {this.state.front 
                    ? <MonsterCardFront {...this.props} flipCard={this.flipCard}/>
                    : <MonsterCardBack {...this.props} flipCard={this.flipCard} addMonsterToCampaign={this.props.addMonsterToCampaign}/>
                }
            </div>
        )
    }
}

export default MonsterCard; 