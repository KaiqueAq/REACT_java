import { NavLink } from 'react-router-dom'
import './styles.css'

function Header() {
  return (
    <header className="header">
      <NavLink className="brand" to="/">
        Meu Projeto
      </NavLink>

      <nav aria-label="Navegacao principal">
        <NavLink to="/" end>Homepage</NavLink>
        <NavLink to="/usuarios">Usuários</NavLink>
      </nav>

    </header>
  )
}

export default Header
