import '../../utils/style/Banner.scss'

function Banner({ cover, title }) {
  return (
    <div className="banner">
      <img className="banner__image" src={cover} alt="image de la banière" />
      {title && (
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  )
}

export default Banner
