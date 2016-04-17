import React, { PropTypes } from 'react';

class CartItem extends React.Component {

  static propTypes = {
    qty: PropTypes.number,
    total: PropTypes.number
  };

  static defaultProps = {
    qty: 0,
    total: 0
  };

  constructor (props, context) {
    super(props, context);
  }

  // initial state
  state = {
    qty: this.props.initialQty,
    total: 0
  };

  componentWillMount () {
    this._recalculateTotal();
  }

  // private
  _increaseQty () {
    this.setState({ qty: this.state.qty + 1 }, this._recalculateTotal);
  }

  // private
  _decreaseQty () {
    this.setState({ qty: this.state.qty - 1 }, this._recalculateTotal);
  }

  // private
  _recalculateTotal () {
    this.setState({ total: this.state.qty * this.props.price });
  }

  render () {

    const { title, image, price } = this.props;

    return (
      <aricle className="row large-4">
        <figure className="text-center">
          <p><img src={image} alt="image"/></p>
          <figcaption><h2>{title}</h2></figcaption>
        </figure>

        <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

        <p className="large-4 column">
          <button onClick={this._increaseQty.bind(this)} className="button success">+</button>
          <button onClick={this._decreaseQty.bind(this)} className="button alert">-</button>
        </p>

        <p className="large-4 column"><strong>Price per item:</strong> ${price}</p>

        <h3 className="large-12 column text-center">Total: ${this.state.total}</h3>
      </aricle>);
  }
}

export default CartItem;