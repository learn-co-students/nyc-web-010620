//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: []
  }

  componentDidMount() {
    requests.fetchKaijus().then(kaijus => this.setState({ kaijus }))
  }

  addNewKaiju = newKaiju => {
    // take a whole new Kaiju obj and add to this.state.kaijus 
    this.setState(prevState => ( {kaijus: [...prevState.kaijus, newKaiju]} ))
  }

  updateKaiju = updatedKaiju => {
    let newKaijus = this.state.kaijus.map( kaiju => {
      if (kaiju.id === updatedKaiju.id){
        return updatedKaiju
      }
      return kaiju 
    })
    this.setState({ kaijus: newKaijus })
  }

  render() {
    return (
      <>

        <CreateKaijuForm addNewKaiju={this.addNewKaiju}/>

        <div id='kaiju-container'>
          {this.state.kaijus.map(kaiju => <KaijuCard key={kaiju.id} {...kaiju} updateKaiju={this.updateKaiju}/>)}
        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
