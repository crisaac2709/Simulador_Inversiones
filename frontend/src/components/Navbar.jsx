import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Bell1x
        </Link>

        {/* Menú */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/simulador" className="nav-link">
              simulador
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/instituciones" className="nav-link">
              instituciones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
