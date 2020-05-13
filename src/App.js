import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/GetGifs'

function App() {
  const [gifs, setGif] = useState([]);
  
  useEffect(function() {
    getGifs().then(gifs => setGif(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
          {
            gifs.map(y => <img src={y} />)
            }
      </section>
    </div>
  );
}

export default App;
