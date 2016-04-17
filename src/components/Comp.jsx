import React from 'react';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (<div>I am a lovely react component! {this.props.title}</div>);
  }
}

export default App;