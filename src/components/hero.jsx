export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            TECNOLOGÍA · PRODUCTO · INTELIGENCIA ARTIFICIAL
          </div>

          <h1>
            Transformamos
            <br />
            ideas en
            <br />
            <span>productos digitales.</span>
          </h1>

          <p className="hero-description">
            Diseñamos y desarrollamos soluciones tecnológicas desde la idea
            inicial hasta un producto real, escalable y preparado para crecer.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn-primary">
              Conocé nuestros proyectos
              <span>→</span>
            </a>

            <a href="#contacto" className="btn-secondary">
              Hablemos de tu idea
            </a>
          </div>

          <div className="hero-services">
            <div className="hero-service">
              <div className="hero-service-icon">&lt;/&gt;</div>
              <strong>DESARROLLO</strong>
              <span>Web & Mobile</span>
            </div>

            <div className="hero-service">
              <div className="hero-service-icon">✦</div>
              <strong>IA</strong>
              <span>Inteligente</span>
            </div>

            <div className="hero-service">
              <div className="hero-service-icon">◇</div>
              <strong>PRODUCTO</strong>
              <span>Idea → MVP</span>
            </div>

            <div className="hero-service">
              <div className="hero-service-icon">↗</div>
              <strong>LAUNCH</strong>
              <span>Listo para crecer</span>
            </div>
          </div>
        </div>

        <div className="hero-logo-wrap">
          <img
            src="/coreia-symbol.png"
            alt="Coreia"
            className="hero-logo"
          />

          <div className="hero-floor"></div>
        </div>
      </div>
    </section>
  );
}