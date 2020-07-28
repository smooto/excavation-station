import React, { useState, useEffect } from 'react'

const gameLevels = {
  1: [3, 5],
  2: [3, 5, 7]
}

export default function Cell({ passClick, level, hasFossil }) {
  const [maxClicks, setMaxClicks] = useState(getMaxClicks(level))
  const [totalClicks, setTotalClicks] = useState(0)
  const [tileClicks, setTileClicks] = useState(0)
  const [complete, setComplete] = useState(false)
  const [tile, setTile] = useState(getTile(maxClicks, level))
  
  useEffect(() => {
    if(totalClicks === maxClicks) {
      setComplete(true)
    }

    if((gameLevels[level][tile] - tileClicks) === gameLevels[level][tile - 1]) {
      setTileClicks(0)
      setTile(tile - 1)
    }
  }, [totalClicks, maxClicks])

  const handleClick = () => {
    if(complete || totalClicks >= maxClicks) return
    
    setTotalClicks(totalClicks + 1)
    setTileClicks(tileClicks + 1)
    passClick()
  }

  return (
    <div class="cell" onClick={handleClick}>
      <p>
        {maxClicks + ' ' + totalClicks}
        {hasFossil && <span>X</span>}
        {complete && <span>done</span>}
      </p>
    </div>
  )
}

function getMaxClicks(gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}

function getTile(maxClicks, gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles.findIndex(el => el === maxClicks);
}
