import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux'

class SushiContainer extends React.Component {
 
  renderSushis = () => {
    let { startIndex, sushis } = this.props;

    let fourSushis = sushis.slice(startIndex, startIndex + 4) 
    return fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
  }
  
  render(){
    return (
      <Fragment>
        <div className="belt">
          { this.renderSushis() }
          <MoreButton />
        </div>
      </Fragment>
    )}
}

const msp = state => {
  return {
    sushis: state.sushis,
    startIndex: state.startIndex
  }
}

export default connect(msp)(SushiContainer)

// startIdx