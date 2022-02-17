import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Card/Card';
import info from './data.js';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';

function App() {

 
  return (
    <div className="App">
     
        <Sidebar info={info} />
        <div className="container">
          <Hero />
          <Cards info={info} />
        </div>
       
        <ScrollBtn />
    
        
    </div>
  );
}

export default App;
