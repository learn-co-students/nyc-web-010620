import React from 'react'
import Ticker from './Ticker'

/**
 * Features
 * 1. Random # 1 - 100 every second when the page loads
 * 2. Enable start/stop button 
 * 3. Color background based on number delta 
 * if newNum > oldNum ==> background should be green
 * 
 * 4. Clean up our interval
 * 
 */



 /**
  * 
  * componentDidMount
  * anything that needs to happen ONCE right when our app / component loads
  * fetching
  * setIntervals
  * subscribing to chatrooms / websockets (action cable!!!)
  * 
  * componentDidUpdate
  * 
  * 
  * componentWillUnmount 
  * 
  * 
  * noLifeCycleMethod
  * 
  */

class TickerContainer extends React.Component {

  state = {
    number: 0,
    background: 'white',
    myInterval: null
  }

  /**** ONLY EVER HAVE ONE OF THESE  */
  componentDidMount() {
    this.createInterval()
  }

  componentDidUpdate(prevProps, prevState) {
    // NEED LOTS OF DIFF BEHAVIOR HERE? CONDITIONALS
    // if (this.props.channelId !=== prevProps.channelId){ /** do some stuff  */ }

    if(this.state.number > prevState.number){
      this.setState({ background: 'green' })
    } else if (this.state.number < prevState.number) {
      this.setState({ background: 'red' })
    }
  }

  componentWillUnmount() {
    if(this.state.myInterval){ clearInterval(this.state.myInterval) }
  }

   /**** ONLY EVER HAVE ONE OF THESE  */

  createInterval = () => {
    // setInterval(callback, frequency to run the callback in MS )
    let myInterval = setInterval(() => {
      this.setState({ number: Math.floor(Math.random() * 100) })
    }, 1000)
  
    this.setState({ myInterval })
  }


  handleClick = () => {
    if (this.state.myInterval) { // interval already exists and needs to be stopped
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else { // there is no active interval, need to create it
      this.createInterval()
    }
  }

  render(){
    return (
      <div className="box" style={{backgroundColor: this.state.background}}>
        <button onClick={this.handleClick} >Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 