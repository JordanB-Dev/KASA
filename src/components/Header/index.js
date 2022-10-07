import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <nav className="header container">
      <div className="logo">
        <NavLink exact to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <ul className="menu">
        <li>
          <NavLink exact to="/" activeClassName="active">
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
