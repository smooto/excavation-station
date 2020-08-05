import { useState, useEffect } from 'react';
import { gameLevels } from '../engine/models';

export function useTileDigs(level, maxDigs) {
  const [tileDigs, setTileDigs] = useState(0)
  const [tileClass, setTileClass] = useState(getTile(maxDigs, level))
  
  useEffect(() => {
    if((gameLevels[level][tileClass] - tileDigs) === gameLevels[level][tileClass - 1]) {
      setTileDigs(0)
      setTileClass(tileClass - 1)
    }
  }, [tileDigs, maxDigs])

  return {
    setTileDigs,
    tileDigs,
    tileClass
  }
}

function getTile(maxDigs, gameLevel) {
  const validTiles = gameLevels[gameLevel]
  return validTiles.findIndex(el => el === maxDigs);
}
