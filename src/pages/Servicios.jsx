import Navbar from "../components/Navbar";
import "./Servicios.css";

export default function Servicios() {
  const servicios = [
    {
      numero: "01",
      titulo: "MVP & Producto Digital",
      descripcion:
        "De la idea a una primera versión funcional lista para validar.",
    },
    {
      numero: "02",
      titulo: "Desarrollo Web",
      descripcion:
        "Frontend, backend, APIs y plataformas digitales a medida.",
    },
    {
      numero: "03",
      titulo: "Inteligencia Artificial",
      descripcion:
        "IA generativa, asistentes y funcionalidades inteligentes.",
    },
    {
      numero: "04",
      titulo: "Automatización",
      descripcion:
        "Integraciones y optimización de procesos repetitivos.",
    },
    {
      numero: "05",
      titulo: "Deploy & Evolución",
      descripcion:
        "Producción, mantenimiento, mejoras y crecimiento.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="svc-page">
        <div className="svc-container">
          {/* CABECERA */}
          <header className="svc-header">
            <div className="svc-eyebrow">
              <span className="svc-dot"></span>
              COREIA / SERVICIOS
            </div>

            <div className="svc-intro">
              <h1>
                Soluciones digitales para
                <span> crear, lanzar y crecer.</span>
              </h1>

              <p>
                Tecnología, desarrollo e inteligencia artificial aplicados a
                necesidades reales.
              </p>
            </div>
          </header>

          {/* SERVICIOS */}
          <section className="svc-list">
            {servicios.map((servicio) => (
              <article
                className="svc-item"
                key={servicio.numero}
              >
                <span className="svc-number">
                  {servicio.numero}
                </span>

                <h2>
                  {servicio.titulo}
                </h2>

                <p>
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </section>

          {/* PROCESO */}
          <section className="svc-process">
            <span className="svc-label">
              NUESTRO PROCESO
            </span>

            <div className="svc-process-line">
              <div>IDEA</div>

              <span></span>

              <div>DISEÑO</div>

              <span></span>

              <div>DESARROLLO</div>

              <span></span>

              <div>LANZAMIENTO</div>

              <span></span>

              <div>EVOLUCIÓN</div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}