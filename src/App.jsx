import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './App.css';
import './Cell.css';

// const gameLevels = {
//   1: [3, 5],
//   2: [3, 5, 7]
// }

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
  
  const [level, setLevel] = useState(2)
  const [totalClicks, setTotalClicks] = useState(0)

  return (
    <>
      <h1>how do react</h1>
      <p>total clicks: {totalClicks}</p>
      <div class="grid-container" style={{gridTemplateColumns: `repeat(${grid.columns}, 100px)`}}>
        {
          makeGrid(grid.rows, grid.columns)
            .map((cell, i) => {
              return (fossilSpots.includes(i))
                ? <Cell passClick={() => setTotalClicks(totalClicks + 1)} level={level} hasFossil={true} />
                : <Cell passClick={() => setTotalClicks(totalClicks + 1)} level={level} hasFossil={false} />;
            })
        }
      </div>
    </>
  );
}

function makeGrid(rows, columns) {
  return Array(rows * columns).fill(undefined)
}

export default App;
