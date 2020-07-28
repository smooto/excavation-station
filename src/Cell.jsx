import React, { useState, useEffect } from 'react'

const gameLevels = {
  1: [3, 5],
  2: [3, 5, 7]
}

export default function Cell({ passClick, level, hasFossil }) {
  const [tile, setTile] = useState(getTile(level))
  const [clickCount, setClickCount] = useState(0)
  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    passClick()
    clickCount === tile ? setComplete(true) : setComplete(false);
  }, [clickCount])

  return (
    <div class="cell" onClick={() => setClickCount(clickCount + 1)}>
      <p>
        {tile + ' ' + clickCount}
        {hasFossil && <span>X</span>}
        {complete && <span>done</span>}
      </p>
    </div>
  )
}

function getTile(gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}
