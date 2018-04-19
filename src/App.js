import React, { Component } from 'react';
import routers from './routes'
import './statics/App.css'
import './store/store-token';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1) || '#/'
    }
  }

  componentDidMount() {
    console.log(routers);
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  
  render() {
    let ChildRoute;
    console.log(this.state)
    switch (this.state.route) {
      case '/about':
        ChildRoute = routers.aboutPage
        break;
      case '/login':
        ChildRoute = routers.loginPage
        break;
      case '/pwa':
        ChildRoute = routers.PwaPage
        break;        
      default:
        ChildRoute = routers.homePage
        break;
    }
    return(
        <ChildRoute />
    )
  }
}

export default App;
