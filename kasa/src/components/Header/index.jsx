import { Link } from 'react-router'
import logo from '../../assets/logo.png'

import '../../utils/style/Header.scss'

function Header() {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
