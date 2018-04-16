import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PWA</h1>
        </header>
        <p className="App-intro">
          progressive web application
        </p>
        <section>
          introduce some tips for new comer！
        </section>
      </div>
    );
  }
}

export default App;
