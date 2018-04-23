import React from 'react';
import queryRep from '../apis/query-rep';

class NumberList extends React.Component {
  render() {
    const { item, id } = this.props;
    return (
      <li key={id}>
        <a href={`https://github.com/${item.node.name}`}>
          {parseInt(id, 10) + 1}----{item.node.name}
        </a>
        <p>作者： {item.node.owner.login}</p>
      </li>
    );
  }
}

class PwaComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numbers: []
    };
  }

  componentDidMount() {
    queryRep(50).then(re => {
      console.log(re);
      if (re && re.data.search.edges) {
        this.setState({
          numbers: re.data.search.edges
        });
      }
    });
  }

  render() {
    return (
      <ul>
        {this.state.numbers.map((item, index) => (
          <NumberList key={index} id={index} item={item} />
        ))}
      </ul>
    );
  }
}

export default PwaComponent;
