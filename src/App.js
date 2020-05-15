import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/GetGifs'
import Gif from './components/Gif';

function App() {
  const [gifs, setGif] = useState([]);
  
  useEffect(function() {
    getGifs({keyword: 'rock'}).then(gifs => setGif(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
          {
            gifs.map(y =>  
              <Gif title={y.title} url={y.url} id={y.id} />)
          }
      </section>
    </div>
  )}
  
export default App;
