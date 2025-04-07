import React, { useState } from 'react'

import '../../utils/style/Slideshow.scss'

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)
  const next = () => {
    setIndex((index + 1) % pictures.length)
  }
  const prev = () => {
    setIndex((index - 1 + pictures.length) % pictures.length)
  }
  console.log(pictures.length)
  return (
    <div className="carrousel">
      <button
        onClick={() => prev()}
        className={`carrousel__prev${pictures.length <= 1 ? ` hidden` : ``}`}
      >
        ❮
      </button>
      <img
        src={pictures[index]}
        alt={`Slide ${index}`}
        className="carrousel__image"
      />
      <p
        className={`carrousel__number${pictures.length <= 1 ? ` hidden` : ``}`}
      >{`${index + 1}/${pictures.length}`}</p>
      <button
        onClick={() => next()}
        className={`carrousel__next${pictures.length <= 1 ? ` hidden` : ``}`}
      >
        ❯
      </button>
    </div>
  )
}

export default Slideshow
