import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: props.initialQty,
      image: props.image,
      price: props.price,
      total: 0
    };
  }

  componentWillMount() {
    this.recalculateTotal();
  }

  increaseQty() {
    this.setState({ qty: this.state.qty + 1 }, this.recalculateTotal);
  }

  decreaseQty() {
    this.setState({ qty: this.state.qty - 1}, this.recalculateTotal);
  }

  recalculateTotal() {
    this.setState({ total: this.state.qty * this.props.price });
  }

  render() {
    return <aricle className="row large-4">
      <figure className="text-center">
        <p><img src={this.state.image} alt="image"/></p>
        <figcaption><h2>{this.state.title}</h2></figcaption>
      </figure>

      <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

      <p className="large-4 column">
        <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
        <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
      </p>

      <p className="large-4 column"><strong>Price per item:</strong> ${this.state.price}</p>

      <h3 className="large-12 column text-center">Total: ${this.state.total}</h3>

    </aricle>
  }
}

CartItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  initialQty: React.PropTypes.number
};

CartItem.defaultProps = {
  title: 'Undefined Product',
  price: 0,
  initialQty: 0
};

export default CartItem;