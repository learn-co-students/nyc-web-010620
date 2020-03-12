import React from 'react'; 
import { StyledMonsterCard } from './styledComponents';

const MonsterCardBack = (props) => {
    const { id, name, img, description, locations, flipCard, addMonsterToCampaign } = props;
    return (
        <StyledMonsterCard>
            <img src={img} alt="monster"/>
            <div className="monster-info">
                <h3>{name}</h3>
                <div>{description}</div>
                <h4>Locations</h4>
                <ul>
                    {locations && locations.map((loc, ind) => <li key={ind}>{loc}</li>)}
                </ul>
                <h4 onClick={() => addMonsterToCampaign(id)}>VANQUISH THE BEAST</h4>
            </div>
            <button onClick={flipCard}>Flip Card</button>
        </StyledMonsterCard>
    )
}

export default MonsterCardBack; 