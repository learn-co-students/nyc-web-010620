// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    showEdit: false
  }

  toggleEditForm = () => {
    this.setState(prevState => ({showEdit: !prevState.showEdit }))
  }

  render() {
    const { id, name, power, image } = this.props;
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={name} />

        {/* What should this edit button do? */}
        {this.state.showEdit && 
          <EditKaijuForm 
            name={name} 
            power={power} 
            image={image} 
            id={id} 
            toggleEditForm={this.toggleEditForm} 
            updateKaiju={this.props.updateKaiju}/>
        }
        <button className='kaiju-card-edit-button' onClick={this.toggleEditForm}>Edit</button>

      </div>
    )
  }
}

export default KaijuCard
