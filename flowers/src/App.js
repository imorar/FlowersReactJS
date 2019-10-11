import React from 'react';
import './App.css';
import Flower from './components/flower';
import CartItem from './components/cartItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flowers: [
        {id:1, title: "Roses", price: 70, imageUrl: require('./images/roses.png') },
        {id:2, title: "Sunflower", price: 40, imageUrl: require('./images/sunflowers.png')},
        {id:3, title: "Dahlia", price: 50, imageUrl: require('./images/dahlia.png')},
        {id:4, title: "Tulips", price: 80, imageUrl: require('./images/tulips.png')},
        {id:5, title: "Orchids", price: 120, imageUrl: require('./images/orchids.png')},
        {id:6, title: "Lavander", price: 95, imageUrl: require('./images/lavander.png')},
      ],
      cart: []
    }
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
