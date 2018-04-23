// 首页
import React from 'react';
import queryUser from '../apis/user';

class AboutPage extends React.Component {

  constructor() {
    super()
    this.state = {
      avatarUrl: '',
      login: '',
      followers: {
        totalCount: ''
      },
      following: {
        totalCount: ''
      },

    }
  }

  componentDidMount() {
    queryUser().then(re => {
      console.log(re);
      this.setState({
        avatarUrl: re.data.viewer.avatarUrl,
        login: re.data.viewer.login,
        followers: {
          totalCount: re.data.viewer.followers.totalCount
        },
        following: {
          totalCount: re.data.viewer.following.totalCount
        },
      })
      
    })
  }

  render() {
    console.log(this.state.info)
    return (
      <section className="home-class">
         <div>
           <img src = { this.state.avatarUrl } alt="name"/>
         </div>
         <h1> { this.state.login } </h1>
         <p> followers: {this.state.followers.totalCount} </p>
         <p> following: {this.state.following.totalCount} </p>
      </section>
    )
  }
}

export default AboutPage;
