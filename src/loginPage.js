import React, { Component } from 'react';
import fetchDate from './login'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: 'dukegod',
      password: 'ahxx123456'
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handSubmit() {
    console.log(this.state)
    fetchDate(this.state.name, this.state.password)
      .then((re) => {
        console.log(re)
      })
  }

  render() {
    return (
      <div>
        <label>
          <input placeholder="name" type="text" name="name" value={ this.state.name } onChange={ this.handleInputChange.bind(this)} />
        </label>
        <hr />  
        <label>
          <input placeholder="password" type="text" name="password" value={ this.state.password } onChange={ this.handleInputChange.bind(this) } />
        </label>  
        <p onClick={ this.handSubmit.bind(this) }> 提交信息 </p>
      </div>
    )
  }
}

export default Login;
