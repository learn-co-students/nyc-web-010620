import React, { useState, Fragment, useEffect } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
  const [startIndex, setStartIndex] = useState(0)

  let displayedSushi = props.sushis.slice(startIndex, startIndex + 4) 

  console.log('inside hook sushi container', startIndex)

  const updateIndex = () => {
    setStartIndex(startIndex + 4)
    // this.setState({ startIndex: this.state.startIndex + 4 })
  }

  useEffect(() => {
    if(props.sushis.length && startIndex + 4 >= props.sushis.length){
      // when startIndex is too high 
      alert('Youve reached the end of the menu. Going back to the top.')
      // alert the user thatwe're sending them back to the top
      setStartIndex(0)
      // and set startIndex back to 0 
    }
  }, [startIndex])


  // useEffect(() => {
  //   console.log('only when mounting')
  // })

  return (
    <Fragment>
      <div className="belt">
        {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton updateIndex={updateIndex}/>
      </div>
    </Fragment>
  )
}

// class SushiContainer extends React.Component {

//   state = {
//     startIndex: 0
//   }

//   updateIndex = () => {
//     let nextIndex = this.state.startIndex + 4 
//     if( nextIndex >= this.props.sushis.length ){
//       nextIndex = 0
//     }
//     this.setState({ startIndex: nextIndex })
//   }

//   render(){

//     let displayedSushi = this.props.sushis.slice(this.state.startIndex, this.state.startIndex + 4) // (startIndex, exclusive endIndex) LOOK AT THE DOCS
   
//     return (
//       <Fragment>
//         <div className="belt">
//           {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={this.props.eatSushi}/>)}
//           <MoreButton updateIndex={this.updateIndex}/>
//         </div>
//       </Fragment>
//     )
//   }
// }

export default SushiContainer