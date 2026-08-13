import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Ir a la portada de Coreia"
        >
          <img
            src="/coreia-logo.png"
            alt="Coreia - Where ideas become companies"
            className="navbar-logo"
          />
        </Link>

        <button
          type="button"
          className={`menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
          aria-label="Navegación principal"
        >
          <NavLink
            to="/inicio"
            className={getNavClass}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/servicios"
            className={getNavClass}
            onClick={closeMenu}
          >
            Servicios
          </NavLink>

          <NavLink
            to="/proyectos"
            className={getNavClass}
            onClick={closeMenu}
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/coreia"
            className={getNavClass}
            onClick={closeMenu}
          >
            Coreia
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "nav-contact active"
                : "nav-contact"
            }
            onClick={closeMenu}
          >
            Hablemos
            <span>→</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}