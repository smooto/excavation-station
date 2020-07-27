import React from 'react'

export default function Cell({ onClick, tile, hasFossil }) {
  return (
    <div class="cell">
      <p>
        {tile}
        {hasFossil && <span>X</span>}
      </p>
    </div>
  )
}
