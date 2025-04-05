import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import '../../utils/style/Rate.scss'

function Rate({ number }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    const isFull = i < number
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`rating${isFull ? '--full' : '--empty'}`}
      />,
    )
  }

  return stars
}

export default Rate
