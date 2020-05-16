import React from 'react';
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail'

import { Link, Route } from 'wouter'

function App() {

  return (
    <div className='App'>
      <section className='App-content'>
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src='/logo.png' />
          </Link>

          <Link to='/gif/luffy'> Luffy </Link>
          <Link to='/gif/zoro'> Zoro </Link>
          <Link to='/gif/ussop'> Ussop </Link>

          <Route 
            component={Home}
            path='/' 
          />
          <Route 
            component={SearchResults}
            path='/search/:keyword' 
          />
          <Route 
            component={Detail}
            path='/gif/:id' 
          />

      </section>
    </div>
  )
}
  
export default App;
