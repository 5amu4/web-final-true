import logo from './logo.svg';
import './App.css';
import hero from './Hero';
import candle from './images/candle.jpg'
import buy from './images/buy.svg'
import log from './images/log.svg'
import prep from './images/prep.svg'

function App() {
  return (
    <div className="App">
      <div className="lata">
      <img className="log" src={ log } />
      <img className="buy" src={ buy } />
        Light it Up
      <img className="candle" src={ candle } />
      </div>
      <div className="prod">
      <img className="buy" src={ buy } />
        Our Prodcuts
        <div className="fot">
          Whatever you need to get your house smelling like heaven
      </div>
      <img className="prep" src={ prep } />
      </div>
      

      
      <hero />
    </div>
  );
}

export default App;


