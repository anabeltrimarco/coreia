import Navbar from "../components/Navbar";

export default function Inicio() {
  const services = [
    {
      number: "01",
      title: "Estrategia",
      text: "Definimos el problema, el producto y el alcance del MVP.",
    },
    {
      number: "02",
      title: "Desarrollo",
      text: "Construimos frontend, backend, APIs y plataformas.",
    },
    {
      number: "03",
      title: "IA",
      text: "Integramos inteligencia artificial y automatización.",
    },
    {
      number: "04",
      title: "Launch",
      text: "Llevamos el producto a producción y lo preparamos para crecer.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="inicio-page-compact">
        <section className="inicio-compact-intro">
          <div className="inicio-compact-container">
            <div className="inicio-compact-eyebrow">
              <span></span>
              COREIA / INICIO
            </div>

            <div className="inicio-compact-intro-grid">
              <div>
                <h1>
                  Creamos productos digitales
                  <span> desde cero.</span>
                </h1>
              </div>

              <div>
                <p>
                  Estrategia, desarrollo e inteligencia artificial para
                  transformar ideas en productos reales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="inicio-compact-services">
          <div className="inicio-compact-container">
            <div className="inicio-compact-heading">
              <span>QUÉ HACEMOS</span>
              <h2>De la idea al producto.</h2>
            </div>

            <div className="inicio-compact-services-grid">
              {services.map((service) => (
                <article
                  className="inicio-compact-service"
                  key={service.number}
                >
                  <span className="inicio-compact-number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="inicio-compact-process">
          <div className="inicio-compact-container">
            <div className="inicio-compact-heading">
              <span>NUESTRO PROCESO</span>
              <h2>Simple. Claro. Ejecutable.</h2>
            </div>

            <div className="inicio-process-bar">
              <div>
                <span>01</span>
                <strong>IDEA</strong>
              </div>

              <i></i>

              <div>
                <span>02</span>
                <strong>MVP</strong>
              </div>

              <i></i>

              <div>
                <span>03</span>
                <strong>VALIDACIÓN</strong>
              </div>

              <i></i>

              <div>
                <span>04</span>
                <strong>LAUNCH</strong>
              </div>

              <i></i>

              <div>
                <span>05</span>
                <strong>GROWTH</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="inicio-compact-projects">
          <div className="inicio-compact-container">
            <div className="inicio-compact-heading">
              <span>PRODUCTOS COREIA</span>
              <h2>Ideas convertidas en productos.</h2>
            </div>

            <div className="inicio-compact-project-grid">
              <article>
                <span className="inicio-project-type">
                  DIGITAL PRODUCT
                </span>

                <h3>FiguMatch</h3>

                <p>
                  Plataforma para gestionar colecciones, encontrar coincidencias
                  e intercambiar figuritas entre usuarios.
                </p>

                <a href="/proyectos">
                  Ver proyecto →
                </a>
              </article>

              <article>
                <span className="inicio-project-type">
                  AI PRODUCT
                </span>

                <h3>PawTrace AI</h3>

                <p>
                  Tecnología para ayudar a encontrar mascotas perdidas mediante
                  reportes, geolocalización y coincidencias inteligentes.
                </p>

                <a href="/proyectos">
                  Ver proyecto →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="inicio-compact-cta">
          <div className="inicio-compact-container">
            <div className="inicio-compact-cta-box">
              <div>
                <span>WHERE IDEAS BECOME COMPANIES</span>

                <h2>¿Tenés una idea?</h2>

                <p>
                  Podemos transformarla en un producto digital.
                </p>
              </div>

              <a href="/contacto">
                Hablemos →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}