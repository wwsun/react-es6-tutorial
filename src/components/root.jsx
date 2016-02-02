import React from 'react';

class Root extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}!</h1>;
  }
}

export default Root;