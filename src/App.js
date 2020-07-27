import React, { useState, useEffect } from 'react';
// import { grid, buryTreasure, addFirstLayer } from './engine/grid';
// import logo from './logo.svg';
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

// grid component
// variables: treasure coords, tile coords

function toggleColor() {
  console.log('toggled')
}

// eventually, cell can be its own component
function makeGrid(rows, columns) {
  return Array(rows * columns).fill(undefined)
}

// function fossilSpot(rows, columns) {
//   // return {
//   //   row: Math.floor(Math.random() * rows),
//   //   col: Math.floor(Math.random() * columns)
//   // }
//   setFossil(Math.floor(Math.random() * (rows * columns)))
// }

// function buryTreasure(grid) {
  // const randomRow = Math.floor(Math.random() * grid.length);
  // const randomCol = Math.floor(Math.random() * grid[0].length);

//   return grid.map((row, rowIndex) => {
//     if (rowIndex === randomRow) {
//       return row.map((column, colIndex) => {
//         if (colIndex === randomCol) {
//           return <div class="treasure"></div>
//         }  
//         return column
//       })
//     }
//     return row
//   })
// }

export default App;
