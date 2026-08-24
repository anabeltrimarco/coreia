import React from "react";

export default function NewNavbar() {
  return (
    <header className="coreia-navbar">
      <div className="coreia-navbar-inner">
        <a href="#top" className="coreia-brand">
          <span className="coreia-brand-symbol" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <i></i>
          </span>

          <span className="coreia-brand-copy">
            <strong>COREIA</strong>
            <small>WHERE IDEAS BECOME COMPANIES</small>
          </span>
        </a>

        <nav className="coreia-nav-links" aria-label="Navegación principal">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="coreia-nav-cta">
          Start a project
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}