import React from 'react';
import './App.css';
import Flower from './components/flower';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flowers: [
        {title: "Roses", price: 70, imageUrl: require('./images/roses.png') },
        {title: "Sunflower", price: 40, imageUrl: require('./images/sunflowers.png')},
        {title: "Dahlia", price: 50, imageUrl: require('./images/dahlia.png')},
        {title: "Tulips", price: 80, imageUrl: require('./images/tulips.png')},
        {title: "Orchids", price: 120, imageUrl: require('./images/orchids.png')},
        {title: "Lavander", price: 95, imageUrl: require('./images/lavander.png')},
      ]
    }
  }

  renderFlowers = () => this.state.flowers.map(flower => <Flower title={flower.title} price={flower.price} imageUrl={flower.imageUrl} />);

  render() {
    return (
      <div className="App">
        <div className="flowers-container">
          {this.renderFlowers()}
        </div>
      </div>
    );
  }
}
