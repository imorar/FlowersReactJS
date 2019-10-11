import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flowers-container">
        <span className="flower-item">
          <img src={require('./images/roses.png')} />
          <span>Roses</span>
          <span>Price: 70RON</span>
          <button>Add to cart</button>
        </span>
        <span className="flower-item">
          <img src={require('./images/sunflowers.png')} />
          <span>Sunflower</span>
          <span>Price: 40RON</span>
          <button>Add to cart</button>
        </span>
        <span className="flower-item">
          <img src={require('./images/dahlia.png')} />
          <span>Dahlia</span>
          <span>Price: 50RON</span>
          <button>Add to cart</button>
        </span>
        <span className="flower-item">
          <img src={require('./images/tulips.png')} />
          <span>Tulips</span>
          <span>Price: 50RON</span>
          <button>Add to cart</button>
        </span>
        <span className="flower-item">
          <img src={require('./images/orchids.png')} />
          <span>Orchids</span>
          <span>Price: 110RON</span>
          <button>Add to cart</button>
        </span>
        <span className="flower-item">
          <img src={require('./images/lavander.png')} />
          <span>Lavander</span>
          <span>Price: 65RON</span>
          <button>Add to cart</button>
        </span>
      </div>
    </div>
  );
}

export default App;
