import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState({ rows: 6, columns: 6 })
  const [maxFossils, setMaxFossils] = useState(2)
  const [fossilSpots, setFossilSpots] = useState([])

  useEffect(() => {
    const spots = Array(maxFossils).fill(undefined).map(cell => {
      return Math.floor(Math.random() * (grid.rows * grid.columns))
    })

    setFossilSpots(spots)
  }, [grid, maxFossils])

  return (
    <>
      <h1>how do react</h1>
      <div class="grid-container" style={{gridTemplateColumns: `repeat(${grid.columns}, 50px)`}}>
        {
          makeGrid(grid.rows, grid.columns)
            .map((cell, i) => {
              return (fossilSpots.includes(i)) ? <div class="cell" onClick={toggleColor}>X</div> : <div class="cell" onClick={toggleColor}></div>;
            })
        }
      </div>
    </>
  );
}

function toggleColor() {
  console.log('toggled')
}

// eventually, cell can be its own component
function makeGrid(rows, columns) {
  return Array(rows * columns).fill(undefined)
}

export default App;
