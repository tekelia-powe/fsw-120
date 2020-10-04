import React from 'react';
import ColoredBoxes from './ColoredBoxes';
import './App.css';

function App() {
  return (
    <div className="boxes">
      <ColoredBoxes 
        color = "red"
        title ="Title"
        subtitle="Subtitle"
        information ="This is basic information."
      />

      <ColoredBoxes 
        color = "yellow"
        title ="Title2"
        subtitle="Subtitle2"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "orange"
        title ="Title3"
        subtitle="Subtitle3"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "green"
        title ="Title4"
        subtitle="Subtitle4"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "blue"
        title ="Title5"
        subtitle="Subtitle5"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "purple"
        title ="Title6"
        subtitle="Subtitle6"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "grey"
        title ="Title7"
        subtitle="Subtitle7"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "white"
        title ="Title8"
        subtitle="Subtitle8"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "pink"
        title ="Title9"
        subtitle="Subtitle9"
        information ="This is basic information."
      />
      <ColoredBoxes 
        color = "teal"
        title ="Title10"
        subtitle="Subtitle10"
        information ="This is basic information."
      />
    </div>
  );
}

export default App;
