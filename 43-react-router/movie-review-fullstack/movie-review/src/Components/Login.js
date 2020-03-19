import React from 'react';
import { API_BASE } from '../constants';

class Login extends React.Component{
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password === '123'){
      this.props.history.push('/movies') // Redirect component can also be used here
    } else {
      alert(' WRONG. YA PLAIN OLD WRONG ')
    }

  }


  render(){
    return (
      <div className="login">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;