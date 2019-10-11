import React from 'react';

export default class CartItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.count !== this.props.count;
  }

  render() {
      console.log(`render ${this.props.title}`);
      
      return (<div className="cart-item">
        <span>
          <span className="count">{this.props.count} x </span>
          <span>{this.props.title}</span>
          <span> | Price: {this.props.price}RON</span>
        </span>
        <span>
          <button onClick={() => this.props.addToCart(this.props.id)}>+</button>
          <button onClick={() => this.props.removeOneFromCart(this.props.id)}>-</button>
          <button onClick={() => this.props.removeFromCart(this.props.id)}>X</button>
        </span>
      </div>)
  }
}