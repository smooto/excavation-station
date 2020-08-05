import { useState, useEffect } from 'react';
import { gameLevels } from '../engine/models';

export function useDigs(level) {
  const [maxDigs, setMaxDigs] = useState(getMaxDigs(level))
  const [totalDigs, setTotalDigs] = useState(0)

  const [complete, setComplete] = useState(false)

  useEffect(() => {
    if(totalDigs === maxDigs) {
      setComplete(true)
    }
  }, [totalDigs, maxDigs])

  useEffect(() => {
    if(totalDigs === maxDigs) {
      setComplete(true)
    }
  }, [totalDigs, maxDigs])

  return {
    maxDigs,
    setTotalDigs,
    totalDigs,
    complete
  }
}

function getMaxDigs(gameLevel) {
  const validTiles = gameLevels[gameLevel].slice(1, gameLevels[gameLevel].length)
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}


