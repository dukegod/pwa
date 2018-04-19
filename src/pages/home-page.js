// 首页
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <section className="home-class">
        <header>
          PWA
        </header>
        <p>
          Github pwa 实践 
        </p>
        <div>
          <a href="#/about"> about </a>
          <hr />
          <a href="#/pwa"> pwa </a>
          <hr />
        </div>
      </section>
    )
  }
}

export default HomePage;
