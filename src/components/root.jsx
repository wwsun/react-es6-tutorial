import React from 'react';
//import CartItem from './cart-item.jsx';
import CommentBox from './tutorial/comment-box.jsx';

//const order = {
//  title: 'Fresh fruits package',
//  image: 'http://7xpv9g.com1.z0.glb.clouddn.com/fruit-image.jpg',
//  initialQty: 3,
//  price: 8
//};

let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is another comment"}
];

class Root extends React.Component {
  render() {
    //return <CartItem title={order.title}
    //                image={order.image}
    //                initalQty={order.initialQty}
    //                price={order.price} />;
    return <CommentBox data={data}/>;
  }
}

export default Root;