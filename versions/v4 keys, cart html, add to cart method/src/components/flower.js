import React from 'react';

export default class Flower extends React.Component {
    render() {
        return (<span className="flower-item">
          <img src={this.props.imageUrl} />
          <span>{this.props.title}</span>
          <span>Price: {this.props.price}RON</span>
          <button onClick={() => this.props.addToCart(this.props.id)}>Add to cart</button>
        </span>)
    }
}