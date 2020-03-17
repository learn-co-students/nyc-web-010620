import React from 'react'
import * as requests from './requests'


class EditKaijuForm extends React.Component {
  state = {
    name: this.props.name, 
    power: this.props.power,
    image: this.props.image
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('this.state in edit kaiju form', this.state)
    requests.editKaiju({ ...this.state, id: this.props.id })
    .then(updatedKaiju => {
      console.log('updated', updatedKaiju)
      // replace that in the KaijuContainer array 
      this.props.updateKaiju(updatedKaiju)
      // close the edit form 
      this.props.toggleEditForm()

    })
  }

  render() {
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.handleSubmit}>

          <label>Name: </label>
          <input value={this.state.name} name="name" onChange={this.handleChange} type='text' />
          <br/>

          <label>Power: </label>
          <input value={this.state.power} name="power" onChange={this.handleChange} type='text' />
          <br/>

          <label>Image URL: </label>
          <input value={this.state.image} name="image" onChange={this.handleChange} type='text' />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
