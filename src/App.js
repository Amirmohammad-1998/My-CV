import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Card/Card';
import info from './data.js';

function App() {

 
  return (
    <div className="App">
        <Sidebar info={info} />
        <div className="container">
          <Hero />
          <Cards info={info} />
        </div>
    </div>
  );
}

export default App;
