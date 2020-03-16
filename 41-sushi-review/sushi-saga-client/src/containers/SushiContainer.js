import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
 
  state = {
    startIdx: 0
  }

  nextPage = () => {
    let newIndex = this.state.startIdx + 4;
    if (newIndex >= this.props.sushis.length){ newIndex = 0 }

    this.setState({
      startIdx: newIndex
      //  startIdx: this.state.startIdx + 4 >= this.props.sushis.length ? 0 : this.state.startIdx + 4
    })
  }
  
  renderSushis = () => {
    // let sushiCopy = [...this.props.sushis]
    let { startIdx } = this.state;

    let fourSushis = this.props.sushis.slice(startIdx, startIdx + 4) // slice does not mutate so we don't need a copy 
    return fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} consume={this.props.consume} ate={this.props.ate}/>)
  }
  
  render(){
    return (
      <Fragment>
        <div className="belt">
          { this.renderSushis() }
          <MoreButton nextPage={this.nextPage}/>
        </div>
      </Fragment>
    )}
}

export default SushiContainer

// startIdx