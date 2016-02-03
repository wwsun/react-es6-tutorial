import React from 'react';
import CartItem from './cart-item.jsx';

const order = {
  title: 'Fresh fruits package',
  image: 'http://7xpv9g.com1.z0.glb.clouddn.com/fruit-image.jpg',
  initialQty: 3,
  price: 8
};

class Root extends React.Component {
  render() {
    return <CartItem title={order.title}
                    image={order.image}
                    initalQty={order.initialQty}
                    price={order.price} />;
  }
}

export default Root;