import '../../utils/style/Host.scss'

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img className="host__picture" src={picture} />
    </div>
  )
}

export default Host
