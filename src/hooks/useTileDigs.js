import { useState, useEffect, useContext } from 'react';
import { gameLevels } from '../engine/models';
import { useLevel } from './levelContext';

export function useTileDigs(maxDigs) {
  const { level } = useLevel();

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
