import React from 'react';
import Hero from './Hero'
import herosData from './herosData'
import './App.css'

function App() {

  const HeroList = herosData.map(hero => <Hero name={hero.name} show={hero.show} imageName={hero.imageName} catchPhrase = {hero.catchPhrase} />)
  


  return (
    
    <div className="App" >
         {HeroList }
    </div>
  );
}

export default App;
