import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function FiguMatch() {
  const features = [
    "Álbum digital",
    "Repetidas",
    "Matches",
    "Intercambios",
    "Chat",
    "Perfil",
  ];

  const technologies = [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Socket.IO",
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
              COREIA / PROYECTOS / FIGUMATCH
            </div>

            <div className="detail-title-row">
              <div>
                <h1>FiguMatch</h1>

                <p>
                  Plataforma para gestionar colecciones de figuritas,
                  encontrar coincidencias entre usuarios y organizar
                  intercambios.
                </p>
              </div>

              <span className="detail-status">
                MVP funcional
              </span>
            </div>
          </header>

          {/* CAPTURA */}
          <section className="detail-image">
            <img
              src="/projects/figumatch-preview.png"
              alt="Captura de la plataforma FiguMatch"
            />
          </section>

          {/* PROBLEMA / SOLUCIÓN */}
          <section className="detail-summary">
            <article>
              <span>01 / PROBLEMA</span>

              <h2>Organizar una colección no debería ser complicado.</h2>

              <p>
                Los coleccionistas suelen llevar el control manualmente y
                tienen dificultades para encontrar personas que tengan las
                figuritas que necesitan.
              </p>
            </article>

            <article>
              <span>02 / SOLUCIÓN</span>

              <h2>Todo el intercambio en una sola plataforma.</h2>

              <p>
                FiguMatch permite administrar el álbum, marcar repetidas,
                encontrar coincidencias y comunicarse con otros usuarios.
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