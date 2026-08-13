import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function ProjectImage({ primary, fallback, alt }) {
  const [src, setSrc] = useState(primary);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src !== fallback) {
      setSrc(fallback);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className="project-image-error">
        <span>Vista previa no disponible</span>
        <small>{alt}</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="project-image"
      onError={handleError}
    />
  );
}

export default function Proyectos() {
  const proyectos = [
    {
      id: "01",
      category: "COLECCIONES · COMUNIDAD",
      title: "FiguMatch",

      description:
        "Plataforma web para gestionar colecciones de figuritas, encontrar coincidencias entre usuarios y facilitar intercambios.",

      tech:
        "React · Node.js · PostgreSQL · Socket.IO",

      // Primero busca directamente dentro de public
      image:
        "/figumatch-preview.png",

      // Si no la encuentra, busca dentro de public/projects
      fallback:
        "/projects/figumatch-preview.png",

      link:
        "/proyectos/figumatch",

      status:
        "MVP FUNCIONAL",
    },

    {
      id: "02",
      category: "IA · GEOLOCALIZACIÓN",
      title: "PawTrace AI",

      description:
        "Plataforma para conectar mascotas perdidas y encontradas mediante geolocalización y tecnología inteligente.",

      tech:
        "Next.js · Node.js · PostgreSQL · IA",

      image:
        "/pawtrace-preview.png",

      fallback:
        "/projects/pawtrace-preview.png",

      link:
        "/proyectos/pawtrace",

      status:
        "EN DESARROLLO",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="projects-page">
        <div className="projects-container">

          {/* CABECERA */}
          <header className="projects-header">
            <div className="projects-eyebrow">
              <span></span>
              COREIA / PROYECTOS
            </div>

            <div className="projects-header-grid">
              <h1>
                Productos que pasan
                <span> de la idea a la realidad.</span>
              </h1>

              <p>
                Diseñamos y construimos plataformas digitales
                combinando producto, tecnología e inteligencia
                artificial.
              </p>
            </div>
          </header>

          {/* LISTADO */}
          <section className="projects-list">
            {proyectos.map((proyecto) => (
              <article
                className="project-row"
                key={proyecto.id}
              >
                {/* IMAGEN */}
                <div className="project-image-wrapper">
                  <ProjectImage
                    primary={proyecto.image}
                    fallback={proyecto.fallback}
                    alt={`Vista previa de ${proyecto.title}`}
                  />

                  <span className="project-status">
                    {proyecto.status}
                  </span>
                </div>

                {/* TEXTO */}
                <div className="project-content">
                  <div className="project-meta">
                    <span>{proyecto.id}</span>

                    <span>
                      {proyecto.category}
                    </span>
                  </div>

                  <h2>
                    {proyecto.title}
                  </h2>

                  <p>
                    {proyecto.description}
                  </p>

                  <div className="project-tech">
                    {proyecto.tech}
                  </div>

                  <Link
                    to={proyecto.link}
                    className="project-link"
                  >
                    Conocer proyecto
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </section>

        </div>
      </main>
    </>
  );
}