import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
          <h1> Gif Searcher!</h1>
          <Link to='/gif/luffy'> Luffy </Link>
          <Link to='/gif/zoro'> Zoro </Link>
          <Link to='/gif/ussop'> Ussop </Link>
          <Route 
            component={ListOfGifs}
            path="/gif/:keyword" />

      </section>
    </div>
  )
}
  
export default App;
