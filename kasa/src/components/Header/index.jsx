import { Link } from 'react-router'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div>
      <img className="logo" alt="logo" src={logo} />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
