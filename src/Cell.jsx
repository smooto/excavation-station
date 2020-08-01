import React, { useState, useEffect } from 'react'
import { useDigs } from './hooks/useDigs'
// import { gameLevels } from './engine/models'
// import './Cell.css';

export default function Cell({ passDig, level, hasRelic }) {
  const [showRelic, setShowRelic] = useState(false)

  const {
    maxDigs,
    totalDigs,
    tileClass,
    tileDigs,
    complete,
    dig
  } = useDigs(level, passDig)

  useEffect(() => {
    if(hasRelic && tileClass === 1) {
      setShowRelic(true)
    }
  }, [hasRelic, tileClass])

  return (
    <>
      <div class={`cell`} onClick={dig}>
        <div class={`tile tile${tileClass} progress${tileDigs}`}>
          <p>
            {maxDigs + ' ' + totalDigs}
            {complete && <span>done</span>}
          </p>
        </div>
        {showRelic && <div class={`relic`}>X</div>}
      </div>

    </>
  )
}
