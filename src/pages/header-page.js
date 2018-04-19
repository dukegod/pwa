
import React from 'react';

class HeaderComponent extends React.Component{
  static defaultProps = {
    title: 'PWA-Github-App'
  }
  render() {
    return (
      <header>
        {this.defaultProps.title}
      </header>
    )
  }
}

export default HeaderComponent;
