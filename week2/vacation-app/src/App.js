import React from 'react';
import Cards from './Cards';
import './App.css';
import vacationSpots from './vacationSpots';

function App() {

  const cardComponent = vacationSpots.map(cards => <Cards place={cards.place} price={cards.price} timeToGo={cards.timeToGo} />)
  return (
    
    <div className="App">
     {cardComponent[0]} 
     {cardComponent[1]}
     {cardComponent[2]}
     {cardComponent[3]}
     {cardComponent[4]}
    </div>
  );
}

export default App;
