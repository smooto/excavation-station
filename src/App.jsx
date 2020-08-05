import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './App.css';
import './Cell.css';
// import { setLevel } from './hooks/levelContext';
import LevelProvider from './hooks/levelProvider';

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
  
  // const [level, setLevel] = useState(2)
  // const { level } = useLevel();

  const [maxDigs, setMaxDigs] = useState(10)
  const [totalDigs, setTotalDigs] = useState(0)

  const [complete, setComplete] = useState(false)

  const [foundRelics, setFoundRelics] = useState([])

  useEffect(() => {
    if(totalDigs === maxDigs) {
      setComplete(true)
    }
  }, [totalDigs])

  return (
    <LevelProvider>
      <h1>how do react</h1>
      <p>total clicks: {totalDigs}</p>
      {!complete && <div class="grid-container" style={{gridTemplateColumns: `repeat(${grid.columns}, 100px)`}}>
        {
          makeGrid(grid.rows, grid.columns)
            .map((cell, i) => {
              return (relicSpots.includes(i))
                ? <Cell passDig={() => setTotalDigs(totalDigs + 1)} passRelic={relic => setFoundRelics(foundRelics.concat(relic))} hasRelic={true} />
                : <Cell passDig={() => setTotalDigs(totalDigs + 1)} passRelic={relic => setFoundRelics(foundRelics.concat(relic))} hasRelic={false} />;
            })
        }
      </div>}
      {complete && <div>
        <p>game over!!!</p>
        {foundRelics[0] && <div>
            you found:
            {foundRelics.map(relic => <p>{relic}</p>)}
          </div>}
      </div>
      }
    </LevelProvider>
  );
}

function makeGrid(rows, columns) {
  return Array(rows * columns).fill(undefined)
}

export default App;
