import React from 'react';
import './App.css';
import Flower from './components/flower';

function App() {
  return (
    <div className="App">
      <div className="flowers-container">
        <Flower title="Roses" price="70RON" imageUrl={require('./images/roses.png')} />
        <Flower title="Sunflower" price="40RON" imageUrl={require('./images/sunflowers.png')} />
        <Flower title="Dahlia" price="50RON" imageUrl={require('./images/dahlia.png')} />
        <Flower title="Tulips" price="80RON" imageUrl={require('./images/tulips.png')} />
        <Flower title="Orchids" price="120RON" imageUrl={require('./images/orchids.png')} />
        <Flower title="Lavander" price="950RON" imageUrl={require('./images/lavander.png')} />
      </div>
    </div>
  );
}

export default App;
