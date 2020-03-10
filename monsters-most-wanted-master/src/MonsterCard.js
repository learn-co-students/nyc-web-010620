import React from 'react'; 
import { StyledMonsterCard } from './styledComponents';

const MonsterCard = (props) => {
    const { name, difficulty, reward, img } = props;
    return (
        <StyledMonsterCard>
            <img src={img} alt="monster"/>
            <div className="monster-info">
                <h3>{name}</h3>
                <div>Difficulty: {difficulty} / 10</div>
                <div>$${reward}</div>
            </div>
        </StyledMonsterCard>
    )
}

export default MonsterCard; 