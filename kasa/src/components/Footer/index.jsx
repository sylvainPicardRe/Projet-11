import logo from '../../assets/logo_footer.png'
import '../../utils/style/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={logo} alt="logo" />
      <p className="footer__content">© 2025 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
