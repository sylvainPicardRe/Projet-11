import { useState } from 'react'

import '../../utils/style/Collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

function Collapse({ title, content }) {
  const StyledIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition: transform 1s ease;
    transform: rotate(${(props) => props.rotation}deg);
  `
  const [isOpen, setIsOpen] = useState(false)

  const [rotation, setRotation] = useState(0)

  function handleClick() {
    setRotation((prevRotation) => prevRotation + 180)
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={`collapse${isOpen ? '--open' : ''}`}>
      <summary className="collapse__summary">
        <h3 className="collapse__title">{title}</h3>
        <StyledIcon
          icon={faChevronUp}
          rotation={rotation}
          onClick={handleClick}
        />
      </summary>
      <p className={`collapse__content${isOpen ? '--open' : ''}`}>{content}</p>
    </div>
  )
}

export default Collapse
