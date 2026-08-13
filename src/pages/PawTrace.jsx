import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PawTrace() {
  const features = [
    "Mascotas perdidas",
    "Mascotas encontradas",
    "Mapa",
    "Geolocalización",
    "Matches",
    "Reportes",
  ];

  const technologies = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "IA",
  ];

  return (
    <>
      <Navbar />

      <main className="detail-page">
        <div className="detail-container">

          {/* ENCABEZADO */}
          <header className="detail-header">
            <div className="detail-eyebrow">
              <span></span>
              COREIA / PROYECTOS / PAWTRACE AI
            </div>

            <div className="detail-title-row">
              <div>
                <h1>PawTrace AI</h1>

                <p>
                  Plataforma para reportar mascotas perdidas y encontradas,
                  visualizar casos cercanos y facilitar su reencuentro.
                </p>
              </div>

              <span className="detail-status">
                En desarrollo
              </span>
            </div>
          </header>

          {/* CAPTURA */}
          <section className="detail-image">
            <img
              src="/projects/pawtrace-preview.png"
              alt="Captura de la plataforma PawTrace AI"
            />
          </section>

          {/* PROBLEMA / SOLUCIÓN */}
          <section className="detail-summary">
            <article>
              <span>01 / PROBLEMA</span>

              <h2>La información suele quedar dispersa.</h2>

              <p>
                Las publicaciones sobre mascotas perdidas y encontradas suelen
                quedar repartidas entre redes sociales, grupos y publicaciones
                aisladas.
              </p>
            </article>

            <article>
              <span>02 / SOLUCIÓN</span>

              <h2>Centralizar los casos y encontrar coincidencias.</h2>

              <p>
                PawTrace AI reúne reportes, los ubica geográficamente y facilita
                la relación entre mascotas perdidas y encontradas.
              </p>
            </article>
          </section>

          {/* INFORMACIÓN */}
          <section className="detail-data">
            <div className="detail-data-group">
              <span>FUNCIONALIDADES</span>

              <div className="detail-chips">
                {features.map((feature) => (
                  <span key={feature}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-data-group">
              <span>TECNOLOGÍA</span>

              <div className="detail-chips">
                {technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="detail-footer">
            <Link to="/proyectos">
              ← Volver a proyectos
            </Link>

            <Link
              to="/contacto"
              className="detail-contact"
            >
              Hablemos
              <span>→</span>
            </Link>
          </footer>

        </div>
      </main>
    </>
  );
}