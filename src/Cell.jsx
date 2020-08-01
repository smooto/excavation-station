import React, { useState, useEffect } from 'react'
import { useDigs } from './hooks/useDigs'
import { relics } from './engine/models'

export default function Cell({ passDig, passRelic, level, hasRelic }) {
  const {
    maxDigs,
    totalDigs,
    tileClass,
    tileDigs,
    complete,
    dig
  } = useDigs(level, passDig)
  
  const [relic, setRelic] = useState(null)
  const [showRelic, setShowRelic] = useState(false)

  useEffect(() => {
    if(hasRelic) setRelic(relics[Math.floor(Math.random() * relics.length)])
  }, [hasRelic])

  useEffect(() => {
    if(hasRelic && tileClass === 1) {
      setShowRelic(true)
    }
  }, [hasRelic, tileClass])

  useEffect(() => {
    if(hasRelic && complete) passRelic(relic)
  }, [complete])

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

// function getRelic() {
//   return relics[Math.floor(Math.random() * relics.length)]
// }
