import React from 'react'
import * as requests from './requests'

const initialState = {
  name: '',
  power: '',
  image: ''
}

class CreateKaijuForm extends React.Component {
  state = initialState

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    requests.postKaiju(this.state)
    .then(newKaiju => {
      console.log('that new new ', newKaiju)
      // call that method from KaijuContainer
      this.props.addNewKaiju(newKaiju)
      this.setState(initialState)
    })
  }

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit}>

        <label>Name: </label>
        <input onChange={this.handleChange} value={this.state.name} name="name" type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input onChange={this.handleChange} value={this.state.power} name="power" type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input onChange={this.handleChange} value={this.state.image} name="image" type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
