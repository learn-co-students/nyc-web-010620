import React from 'react'; 
import { StyledMonsterCard } from './styledComponents';

const MonsterCardFront = (props) => {
    const { name, difficulty, reward, img, flipCard } = props;
    return (
        <StyledMonsterCard>
            <img src={img} alt="monster"/>
            <div className="monster-info">
                <h3>{name}</h3>
                <div>Difficulty: {difficulty} / 10</div>
                <div>$${reward}</div>
            </div>
            <button onClick={flipCard}>Flip Card</button>
        </StyledMonsterCard>
    )
}

export default MonsterCardFront; 