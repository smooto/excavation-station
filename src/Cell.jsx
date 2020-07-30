import React, { useState, useEffect } from 'react'
// import './Cell.css';

const gameLevels = {
  1: [0, 3, 6],
  2: [0, 3, 6, 9]
}

export default function Cell({ passClick, level, hasFossil }) {
  const [maxClicks, setMaxClicks] = useState(getMaxClicks(level))
  const [totalClicks, setTotalClicks] = useState(0)
  const [tileClicks, setTileClicks] = useState(0)
  const [tileClass, setTileClass] = useState(getTile(maxClicks, level))

  const [showFossil, setShowFossil] = useState(false)
  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    if(totalClicks === maxClicks) {
      setComplete(true)
    }

    if((gameLevels[level][tileClass] - tileClicks) === gameLevels[level][tileClass - 1]) {
      setTileClicks(0)
      setTileClass(tileClass - 1)
    }
  }, [totalClicks, maxClicks])

  useEffect(() => {
    if(hasFossil && tileClass === 1) {
      setShowFossil(true)
    }
  }, [hasFossil, tileClass])

  const handleClick = () => {
    if(complete || totalClicks >= maxClicks) return
    
    setTotalClicks(totalClicks + 1)
    setTileClicks(tileClicks + 1)
    passClick()
  }

  return (
    <>
      <div class={`cell`} onClick={handleClick}>
        <div class={`tile tile${tileClass} progress${tileClicks}`}>
          <p>
            {maxClicks + ' ' + totalClicks}
            {complete && <span>done</span>}
          </p>
        </div>
        {showFossil && <div class={`fossil`}>X</div>}
      </div>

    </>
  )
}

function getMaxClicks(gameLevel) {
  const validTiles = gameLevels[gameLevel].slice(1, gameLevels[gameLevel].length)
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}

function getTile(maxClicks, gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles.findIndex(el => el === maxClicks);
}
