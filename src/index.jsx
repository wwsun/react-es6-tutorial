import React from 'react';
import Comp from './components/Comp.jsx';

// todo: finish your app here
export default class App extends React.Component {

  constructor (props, context) {
    super(props, context);
  }
  
  render () {
    return <Comp {...this.props}/>
  }
  
};