import React, {useEffect, useState} from 'react';
import './App.css';


const APIURL = 'https://api.giphy.com/v1/gifs/search?api_key=AFw1aZYdgrVWLPwT6m7yccBNYyHr13Jf&q=one piece&limit=25&offset=0&rating=G&lang=en'

function App() {
  const [gifs, setGif] = useState(GIFS);

  
  useEffect(function() {
    //setGif(DIFFERENT_GIFFS)
    fetch(APIURL)
      .then(res = res.json())
      .then(response => {
        const {data} = response
      })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
          {
            gifs.map(x => <img src={x} />)
            }
      </section>
    </div>
  );
}

export default App;
