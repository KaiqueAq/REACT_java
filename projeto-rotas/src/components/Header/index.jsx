import './styles.css'
import logo from '../../assets/logo.svg'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                    <span>Contabilidade Simples</span>
                </Link>

                <nav>
                    <NavLink to="/sobre-nos">sobre-nos</NavLink>
                    <NavLink to="/fale-conosco">fale-conosco</NavLink>
                    <NavLink to="/servico">Servico</NavLink>
                    <NavLink to="/Trabalhe-consco">TrabalheConosco</NavLink>

                </nav>
            </div>
        </header>
    )
}