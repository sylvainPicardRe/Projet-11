import { Link } from 'react-router'

import '../../utils/style/Error.scss'

function Error() {
  return (
    <div className="error container">
      <h1 className="error__title">404</h1>
      <p className="error__content">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retouner à la page d'accueil
      </Link>
    </div>
  )
}

export default Error
