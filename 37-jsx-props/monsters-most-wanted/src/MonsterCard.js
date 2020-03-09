import React from 'react'; 


// props is for FUNCTIONAL components
// this.props is for CLASS components 

// FUNCTIONAL when you're just rendering, no complex logic 
// CLASS COMPONENTS for complex logic... if you need state or if you need lifecycle methods 


const MonsterCard = (props) => {
    const { name, difficulty, reward, img } = props;
    return (
        <div className="monster-card">
            <h3>{name}</h3>
            <img style={{height: '100px', width: '100px'}} src={img} alt="monster"/>
            <div>Difficulty: {difficulty} / 10</div>
            <div>$${reward}</div>
        </div>
    )
}

/**
 * 
 * Main diffs btwn class and func components
 * class needs this.props v func props
 * class extends React.Component
 * class by default has render() { returns what you wanna show }
 * class methods should be arrows so they're bound 
 */


// class MonsterCard extends React.Component {
//     render(){
//         const { name, difficulty, reward, img } = this.props;
//         return (
//             <div className="monster-card">
//                 <h3>{name}</h3>
//                 <img style={{height: '100px', width: '100px'}} src={img} alt="monster"/>
//                 <div>Difficulty: {difficulty} / 10</div>
//                 <div>$${reward}</div>
//             </div>
//         )
//     }
// }

export default MonsterCard; 