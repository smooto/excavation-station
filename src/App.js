import React from 'react';
// import { grid, buryTreasure, addFirstLayer } from './engine/grid';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>how do react</h1>
      <div class="grid-container">
        {
          grid(6,6)
        }
      </div>
    </>
  );
}

// grid component
// variables: treasure coords, tile coords

function toggleColor() 

// eventually, cell can be its own component
function grid(rows, columns) {
  return Array(rows).fill(
    Array(columns).fill(<div class="cell" onClick={}></div>)
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
