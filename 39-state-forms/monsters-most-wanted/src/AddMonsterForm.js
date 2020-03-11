import React from 'react';
import { StyledForm } from './styledComponents'

const initialState = {
    name: '',
    img: '',
    description: '',
    difficulty: '',
    reward: ''
}
class AddMonsterForm extends React.Component {

    state = initialState;

    handleInputChange = e => {
        // console.log(e.target.name, '.....', e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitting...', this.state)
        // 1. send a fetch to my backend to add the new monster

        fetch('http://localhost:6001/monsters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }, 
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log('new monster data', data)

            // 2. add that monster pessismtically to all of my monsters
            this.props.addNewMonster(data)
            // 3. clear the form once i've added the monster successfully 
            this.setState(initialState)
        })


    }

    // OBSOLETE!!!
    // handleNameChange = e => {
    //     this.setState({ name: e.target.value })
    // }

    // handleImgChange = e => {
    //     this.setState({ img: e.target.value })
    // }

    // handleDescChange = e => {
    //     this.setState({ description: e.target.value })
    // }

    render(){
        // console.log(this.state)
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Image:
                    <input type="text" name="img" value={this.state.img} onChange={this.handleInputChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange}  />
                </label>
                <label>
                    Difficulty:
                    <input type="text" name="difficulty" value={this.state.difficulty} onChange={this.handleInputChange} />
                </label>
                <label>
                    Reward:
                    <input type="text" name="reward" value={this.state.reward} onChange={this.handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </StyledForm>
        )
    }
}

export default AddMonsterForm;



// const ComponentName = props => {
//     return ( <div></div>)
// }