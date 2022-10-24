import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <nav className="header container">
      <div className="logo">
        <Link exact to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="menu">
        <li>
          <NavLink exact to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
