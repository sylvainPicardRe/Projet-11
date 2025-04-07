import { useState } from 'react'

import '../../utils/style/Collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={`collapse${isOpen ? '--open' : ''}`}>
      <summary className="collapse__summary" onClick={handleClick}>
        <h3 className="collapse__title">{title}</h3>
        <StyledIcon icon={faChevronUp} $isOpen={isOpen} />
      </summary>
      <p className={`collapse__content${isOpen ? '--open' : ''}`}>{content}</p>
    </div>
  )
}

export default Collapse
