import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      name: value
    });
  }

  render() {
    return (
      <div>
        <label>
          <input placeholder="name" type="text" value={ this.state.name } onChange={this.handleInputChange} />
        </label>
        <hr />  
        <label>
          <input placeholder="ps" type="text" value={ this.state.password } onChange={this.handleInputChange} />
        </label>  
        <p onClick={this.handSubmit}></p>
      </div>
    )
  }
}

export default Login;
