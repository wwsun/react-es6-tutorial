import React from 'react';
import CartItem from './components/CartItem.jsx';
// import Comp from './components/Comp.jsx';

// todo: finish your app here
export default class App extends React.Component {

  constructor (props, context) {
    super(props, context);
  }
  
  render () {
    return <CartItem {...this.props}/>
  }
  
};