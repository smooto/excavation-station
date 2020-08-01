import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './App.css';
import './Cell.css';

function App() {
  const [grid, setGrid] = useState({ rows: 6, columns: 6 })
  const [maxRelics, setMaxRelics] = useState(2)
  const [relicSpots, setRelicSpots] = useState([])
  
  useEffect(() => {
    const spots = Array(maxRelics).fill(undefined).map(cell => {
      return Math.floor(Math.random() * (grid.rows * grid.columns))
    })

    setRelicSpots(spots)
  }, [grid, maxRelics])
  
  const [level, setLevel] = useState(2)
  const [totalDigs, setTotalDigs] = useState(0)
  const [foundRelics, setFoundRelics] = useState([])

  return (
    <>
      <h1>how do react</h1>
      <p>total clicks: {totalDigs}</p>
      <div class="grid-container" style={{gridTemplateColumns: `repeat(${grid.columns}, 100px)`}}>
        {
          makeGrid(grid.rows, grid.columns)
            .map((cell, i) => {
              return (relicSpots.includes(i))
                ? <Cell passDig={() => setTotalDigs(totalDigs + 1)} passRelic={relic => setFoundRelics(foundRelics.concat(relic))} level={level} hasRelic={true} />
                : <Cell passDig={() => setTotalDigs(totalDigs + 1)} passRelic={relic => setFoundRelics(foundRelics.concat(relic))} level={level} hasRelic={false} />;
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
