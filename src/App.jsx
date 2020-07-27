import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './App.css';

function App() {
  const [grid, setGrid] = useState({ rows: 6, columns: 6 })
  const [maxFossils, setMaxFossils] = useState(2)
  const [fossilSpots, setFossilSpots] = useState([])
  const [maxTileClicks , setMaxTileClicks] = useState(5)

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
              return (fossilSpots.includes(i))
                ? <Cell onClick={toggleColor} tile={tileLevel(maxTileClicks)} hasFossil={true} />
                : <Cell onClick={toggleColor} tile={tileLevel(maxTileClicks)} hasFossil={false} />;
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
  return Array(rows * columns).fill(<Cell onClick={toggleColor} hasFossil={false} />)
}

function tileLevel(maxClicks) {
  return Math.ceil(Math.random() * (maxClicks))
}

export default App;
