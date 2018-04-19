// 首页
import React from 'react';
import LoginOauth from '../store/login'

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
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
    console.log(this.state);
    LoginOauth(this.state.name, this.state.password)
      .then(re => {
        console.log(re)
        if (re && re.body && re.body.token) {
          localStorage.setItem('pwaToken', re.body.token);
          window.location.hash = '#/';
        }
      })
  }

  render() {
    return (
      <div className="login">
        <label>
          <span> 登录名： </span>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange.bind(this)}
          />
        </label>
        <hr />
        <label>
          <span> 密码： </span>
          <input
            placeholder="password"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange.bind(this)}
          />
        </label>
        <p> 
          <button onClick={this.handSubmit.bind(this)}> 提交信息 </button> 
        </p>
      </div>
    );
  }
}

export default HomePage;
