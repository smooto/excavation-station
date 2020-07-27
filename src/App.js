import React, { useState } from 'react';
// import { grid, buryTreasure, addFirstLayer } from './engine/grid';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [grid, setGrid] = useState({ rows: 6, columns: 6 })

  return (
    <>
      <h1>how do react</h1>
      <div class="grid-container" style={{gridTemplateColumns: `repeat(${grid.columns}, 50px)`}}>
        {
          makeGrid(grid.rows, grid.columns)
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
  return Array(rows).fill(
    Array(columns).fill(<div class="cell" onClick={toggleColor}></div>)
  )
}

function treasureCoords(grid) {
  return {
    row: Math.floor(Math.random() * grid.length),
    col: Math.floor(Math.random() * grid[0].length)
  }
}

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