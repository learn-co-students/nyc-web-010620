pull your cohort repo!
go to folder =====>	monster-most-wanted-master
npm install
npm start
begin!!!!

monsters also have description (string)
     and locations (array of strings)


## Features
- Flip View of Monster Card. Back side should show details & locations & button to start hunting. 
- Now.. when they click on the button on the back... add the monster to my campaigns... 


### Round 1
- X components
    - monsterCard class component renders front or back 
    - monsterCardFront (functional)
    - monsterCardBack (functional) 

- X state thangs
    - on monsterCard (class) state = { front: true }
    - ??? scope of state in monsterCard
    - ??? when we click a monsterCard to add to campaign does it remove from mostWanted 

- X events
    - onClick or onMouseOver monsterCard (some div somewhere) defined & invoked 
    - setState on monsterCard to flip front value (true/false)


### Round 2
- state thangs
    - make a new array chosenMonsters
    - move monsters of state into app level
    - pass props down to MonsterContainer (state.monsters) and to CampaignContainer (state.chosenMonsters)

- components
    - need CampaignContainer which will get some props from App

- events
    - click on the button on MonsterCardBack
    - need to update app setState({ chosenMonsters: [someNewArray] })






## Questions
- What components are you using? 
    - Do you need to create new components? 
    - Which types will they be (functional or class)?
- What information do you need in state, on which component(s)? 
    - Are you adding new keys or modifying state in any way? 
- What props do you need to pass from which parent(s) to which child(ren)? 
- What event handlers are you using on which elements? 
    - Where are those callbacks being defined, where are they being invoked, and what do they do? 


## Next Lecture: FORMS 
- Form to submit a monster for hunting 














- Campaigns Container, showing Monster Cards of the Monsters you're hunting 
        including buttons to give up the hunt or confirm vanquishing
- Monster Card Update: conditional rendering to show vanquished monsters differently to show that they're finished