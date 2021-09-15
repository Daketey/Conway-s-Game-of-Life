import React,{useState} from 'react'
import Canvas from './Canvas'

function App() {
  
  return (
    <div style={{textAlign: 'center'}} className="App">
      <h1> Conway's Game of Life </h1>
      <Canvas />
    </div>
  );
}

export default App;
