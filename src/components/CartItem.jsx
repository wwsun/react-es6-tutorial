import React, { PropTypes } from 'react';

/**
 * Component CartItem
 *  which used to display a cart item
 *
 *  props: 由父组件传递给子组件
 *  state: 组件自身负责管理, 凡是在运行时需要修改的数据一定是state
 */
class CartItem extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    initialQty: PropTypes.number,
  };

  static defaultProps = {
    title: 'undefined',
    image: '',
    price: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.initialQty,
      total: 0,
    };
  }

  componentWillMount() {
    this.recalculateTotal();
  }

  // private
  increaseQty() {
    this.setState({ qty: this.state.qty + 1 }, this.recalculateTotal);
  }

  // private
  decreaseQty() {
    this.setState({ qty: this.state.qty - 1 }, this.recalculateTotal);
  }

  // private
  recalculateTotal() {
    this.setState({ total: this.state.qty * this.props.price });
  }

  render() {
    const { title, image, price } = this.props;

    return (
      <aricle className="row large-4">
        <figure className="text-center">
          <p><img src={image} alt="product" /></p>
          <figcaption><h2>{title}</h2></figcaption>
        </figure>

        <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

        <p className="large-4 column">
          <button onClick={::this.increaseQty} className="button success">+</button>
          <button onClick={::this.decreaseQty} className="button alert">-</button>
        </p>

        <p className="large-4 column"><strong>Price per item:</strong> ${price}</p>

        <h3 className="large-12 column text-center">Total: ${this.state.total}</h3>
      </aricle>);
  }
}

export default CartItem;
