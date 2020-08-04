import { useState, useEffect } from 'react';
import { gameLevels } from '../engine/models';

export function useDigs(level, passDig) {
  const [maxDigs, setMaxDigs] = useState(getMaxDigs(level))
  const [totalDigs, setTotalDigs] = useState(0)

  const [tileDigs, setTileDigs] = useState(0)
  const [tileClass, setTileClass] = useState(getTile(maxDigs, level))

  const [complete, setComplete] = useState(false)

  useEffect(() => {
    if(totalDigs === maxDigs) {
      setComplete(true)
    }

    if((gameLevels[level][tileClass] - tileDigs) === gameLevels[level][tileClass - 1]) {
      setTileDigs(0)
      setTileClass(tileClass - 1)
    }
  }, [totalDigs, maxDigs])

  const dig = () => {
    if(complete || totalDigs >= maxDigs) return
    
    setTotalDigs(totalDigs + 1)
    setTileDigs(tileDigs + 1)
    passDig()
  }

  useEffect(() => {
    if(totalDigs === maxDigs) {
      setComplete(true)
    }
  }, [totalDigs, maxDigs])

  return {
    maxDigs,
    totalDigs,
    tileClass,
    tileDigs,
    complete,
    dig
  }
}

function getMaxDigs(gameLevel) {
  const validTiles = gameLevels[gameLevel].slice(1, gameLevels[gameLevel].length)
  return validTiles[Math.floor(Math.random() * validTiles.length)]
}

function getTile(maxDigs, gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles.findIndex(el => el === maxDigs);
}
