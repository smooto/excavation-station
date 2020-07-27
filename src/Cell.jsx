import React, { useState, useEffect } from 'react'

const gameLevels = {
  1: [3, 5],
  2: [3, 5, 7]
}

export default function Cell({ passClick, level, hasFossil }) {
  const [tile, setTile] = useState(getTile(level))
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    passClick()
  }, [clickCount])

  return (
    <div class="cell" onClick={() => setClickCount(clickCount + 1)}>
      <p>
        {tile}
        {hasFossil && <span>X</span>}
      </p>
    </div>
  )
}

function getTile(gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}
