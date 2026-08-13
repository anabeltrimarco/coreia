import { Link } from "react-router-dom";

export default function CoreiaBar() {
  return (
    <section className="cg-footer">
      <div className="cg-footer-inner">
        <div className="cg-logo-box">
          <img
            src="/coreia-symbol.png"
            alt="Coreia"
            className="cg-logo"
          />
        </div>

        <p className="cg-footer-text">
          Diseñamos y construimos productos digitales desde la idea hasta su
          lanzamiento.
        </p>

        <Link to="/contacto" className="cg-footer-button">
          Hablemos <span>→</span>
        </Link>
      </div>
    </section>
  );
}