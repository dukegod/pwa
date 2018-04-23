// 首页
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <section className="home-class">
        <header>
          
        </header>
        <p>
          Github 
        </p>
        <div>
          <a href="#/about"> 关于自己 </a>
          <hr />
          <a href="#/pwa"> Github上搜索pwa相关的项目 </a>
          <hr />
        </div>
      </section>
    )
  }
}

export default HomePage;
