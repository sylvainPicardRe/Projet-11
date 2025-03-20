import { useState } from 'react'

import '../../utils/style/Collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const [rotation, setRotation] = useState(0)

  function handleClick() {
    setRotation((prevRotation) => prevRotation + 180)
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="collapse">
      <summary className="collapse__summary">
        <h3 className="collapse__title">{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </summary>
      <p className={`collapse__content${isOpen ? '--open' : ''}`}>{content}</p>
    </div>
  )
}

export default Collapse
