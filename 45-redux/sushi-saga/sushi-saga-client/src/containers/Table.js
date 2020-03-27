import React, { Fragment } from 'react'
import { connect } from 'react-redux';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates(props.eatenSushis) }
        </div>
      </div>
    </Fragment>
  )
}

const msp = state => {
  return {
    money: state.money,
    eatenSushis: state.eatenSushis
  }
}

export default connect(msp)(Table)