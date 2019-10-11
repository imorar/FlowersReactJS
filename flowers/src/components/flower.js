import React from 'react';

export default class Flower extends React.Component {
    render() {
        return (<span className="flower-item">
          <img src={this.props.imageUrl} />
          <span>{this.props.name}</span>
          <span>Price: {this.props.price}RON</span>
          <button>Add to cart</button>
        </span>)
    }
}