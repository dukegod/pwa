import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api'
// import login from './login'


class NumberList extends Component {
  render() {
    const { item, id } = this.props 
    return(
      <li key= {id}>
        <a href={`https://github.com/${item.node.name}`}>{parseInt(id, 10)+1}----{item.node.name}</a>
        <p>作者： { item.node.owner.login }</p>
      </li>
    )
  }
}


class App extends Component {
  
  constructor(props) {
    super()
    this.state = {
      numbers: []
    }
  }


  componentDidMount() {
    api(50).then(re => {
      console.log(re)
      this.setState({
        numbers: re.body.search.edges
      })
    })
  }



  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PWA</h1>
        </header>
        <p className="App-intro">
          Github 上有关pwa的项目
        </p>
        <ul>
          {
            this.state.numbers.map((item, index) => <NumberList key={index} id={index} item= {item}/>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
