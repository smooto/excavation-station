const grid = (rows, columns) => {
  return Array(rows).fill(
    Array(columns).fill(undefined)
  )
}

const buryTreasure = (grid) => {
  const randomRow = Math.floor(Math.random() * grid.length);
  const randomCol = Math.floor(Math.random() * grid[0].length);

  return grid.map((row, rowIndex) => {
    if (rowIndex === randomRow) {
      return row.map((column, colIndex) => {
        if (colIndex === randomCol) {
          return 'x'
        }
  
        return column
      })
    }

    return row
  })
}

const buryMoreTreasures = (grid, treasures) => {
  const digSpots = Array(treasures).fill(undefined).map(spot => {
    return {
      randomRow: Math.floor(Math.random() * grid.length),
      randomCol: Math.floor(Math.random() * grid[0].length)
    }
  })

  // return a separate grid for each treasure -- these can be combined in FE
  return digSpots.map((spot) => {
    return grid.map((row, rowIndex) => {
      if (rowIndex === spot.randomRow) {
        return row.map((column, colIndex) => {
          if (colIndex === spot.randomCol) {
            return 'x'
          }
          return column
        })
      }
      return row
    })
  })
}

const addFirstLayer = (grid) => {
  // 1st "layer" will always be full layer of lvl1 tiles
  return grid.map(row => {
    return row.map(cell => {
      return 1
    })
  })
}

module.exports = {
  grid,
  buryTreasure,
  addFirstLayer
}
