import React from 'react'
import { connect } from 'react-redux'
import { eatSushiActionCreator } from '../actionCreators'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.consume(props.sushi.id, props.sushi.price)}>
        { 
          !props.eatenSushis.includes(props.sushi.id) && <img src={props.sushi.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

const msp = state => {
  return {
    eatenSushis: state.eatenSushis
  }
}

const mdp = dispatch => {
  return {
    consume: (id, price) => dispatch(eatSushiActionCreator(id, price))
  }
}

export default connect(msp, mdp)(Sushi);