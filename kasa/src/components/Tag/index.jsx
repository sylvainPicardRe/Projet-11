import '../../utils/style/Tag.scss'

function Tag({ name }) {
  return (
    <div className="tag">
      <p className="tag__name">{name}</p>
    </div>
  )
}

export default Tag
