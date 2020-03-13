import React from 'react';
import { Container, ContainerHeader } from './styledComponents';
import MonsterCard from './MonsterCard';

const CampaignContainer = (props) => {
    return (
        <Container half>
            <ContainerHeader>ACTIVE CAMPAIGNS</ContainerHeader>
            {props.monsters.map((monster, ind) => <MonsterCard key={ind} {...monster} handleClick={props.destroyMonster}/>)}
        </Container>
    )
}

export default CampaignContainer;