import PropTypes from 'prop-types'
import '../../utils/style/Card.scss'

function Card({ title, cover }) {
  return (
    <div className="card">
      <img className="card__img" src={cover} alt={title} />
      <span className="card__title">{title}</span>
    </div>
  )
}

Card.PropTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
}

Card.defaultProps = {
  title: 'Mon titre par défault',
}

export default Card
