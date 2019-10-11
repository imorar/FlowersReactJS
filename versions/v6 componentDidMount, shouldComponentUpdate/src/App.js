import React from 'react';
import './App.css';
import Flower from './components/flower';
import CartItem from './components/cartItem';
import { getFlowers } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flowers: [],
      cart: []
    }
  }

  componentDidMount() {
    getFlowers.then(result => {
      debugger;
      this.setState({flowers: result});
    });
  }

  addToCart = (flowerId) => {
    const existingFlower = this.state.flowers.find(x => x.id === flowerId);
    
    const cartList = this.state.cart.slice();
    const itemAlreadyAdded = cartList.find(x => x.id === flowerId);

    if(itemAlreadyAdded) {
      itemAlreadyAdded["count"] = itemAlreadyAdded["count"] + 1;
    } else {
      const flowerToAdd = Object.assign({}, existingFlower);
      flowerToAdd["count"] = 1;
      cartList.push(flowerToAdd);
    }

    this.setState({cart: cartList});
  }

  removeOneFromCart = (flowerId) => {
    let cartList = this.state.cart.slice();
    const flowerToRemove = cartList.find(x => x.id === flowerId);

    if(flowerToRemove.count === 1) {
      cartList = cartList.filter(x => x.id !== flowerId);
    } else {
      flowerToRemove.count = flowerToRemove.count - 1;
    }

    this.setState({cart: cartList});
  }

  removeFromCart = (flowerId) => {
    let cartList = this.state.cart.slice();
    cartList = cartList.filter(x => x.id !== flowerId);

    this.setState({cart: cartList});
  }

  renderFlowers = () => this.state.flowers.map(flower => <Flower key={flower.id} addToCart={this.addToCart} id={flower.id} title={flower.title} price={flower.price} imageUrl={flower.imageUrl} />);

  renderCartContent = () => 
    this.state.cart.map(cartItem => 
      <CartItem 
        key={cartItem.id}
        addToCart={this.addToCart}
        removeOneFromCart={this.removeOneFromCart}
        removeFromCart={this.removeFromCart}
        {...cartItem} 
      />);
  
  render() {
    if(!this.state.flowers)
      return undefined;

    return (
      <div className="App">
        <div className="cart-container">
          {this.renderCartContent()}
        </div>
        <div className="flowers-container">
          {this.renderFlowers()}
        </div>
      </div>
    );
  }
}
