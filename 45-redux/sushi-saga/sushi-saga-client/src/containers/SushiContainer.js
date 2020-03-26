import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
 
  state = {
    startIdx: 0
  }

  updateIndex = () => {
    let newIndex = this.state.startIdx + 4;
    if (newIndex >= this.props.sushis.length){ newIndex = 0 }

    this.setState({ startIdx: newIndex })
  }
  
  renderSushis = () => {
    let { startIdx } = this.state;

    let fourSushis = this.props.sushis.slice(startIdx, startIdx + 4) // slice does not mutate so we don't need a copy 
    return fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} consume={this.props.consume} eatenSushis={this.props.eatenSushis}/>)
  }
  
  render(){
    return (
      <Fragment>
        <div className="belt">
          { this.renderSushis() }
          <MoreButton updateIndex={this.updateIndex}/>
        </div>
      </Fragment>
    )}
}

export default SushiContainer

// startIdx