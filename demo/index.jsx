import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index.jsx';

const order = {
  title: 'Fresh fruits package',
  image: 'http://7xpv9g.com1.z0.glb.clouddn.com/fruit-image.jpg',
  initialQty: 3,
  price: 8
};

ReactDOM.render(<App {...order}/>, document.getElementById('react-app'));