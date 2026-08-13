import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Coreia.css";

export default function Coreia() {
  return (
    <>
      <Navbar />

      <main className="cr-page">
        <div className="cr-container">

          <header className="cr-hero">
            <div className="cr-eyebrow">
              <span></span>
              COREIA / NOSOTROS
            </div>

            <div className="cr-hero-grid">
              <div>
                <h1>
                  Ideas que se convierten
                  <span> en productos.</span>
                </h1>

                <p className="cr-tagline">
                  Where ideas become companies.
                </p>
              </div>

              <p className="cr-description">
                Coreia combina estrategia, desarrollo de software e
                inteligencia artificial para diseñar, construir y lanzar
                productos digitales.
              </p>
            </div>
          </header>

          <section className="cr-section">
            <div className="cr-section-number">01</div>

            <div className="cr-section-content">
              <span className="cr-label">QUÉ HACEMOS</span>

              <h2>
                De una idea a un producto funcionando.
              </h2>

              <p>
                Trabajamos desde la definición inicial hasta la puesta en
                producción, conectando producto, tecnología y ejecución.
              </p>

              <div className="cr-flow">
                <span>IDEA</span>
                <i></i>
                <span>PRODUCTO</span>
                <i></i>
                <span>DESARROLLO</span>
                <i></i>
                <span>LANZAMIENTO</span>
              </div>
            </div>
          </section>

          <section className="cr-section">
            <div className="cr-section-number">02</div>

            <div className="cr-section-content">
              <span className="cr-label">CÓMO TRABAJAMOS</span>

              <div className="cr-method-grid">
                <article>
                  <span>01</span>
                  <h3>Entender</h3>
                  <p>
                    Analizamos el problema, los usuarios y el objetivo.
                  </p>
                </article>

                <article>
                  <span>02</span>
                  <h3>Diseñar</h3>
                  <p>
                    Definimos funcionalidades, experiencia y arquitectura.
                  </p>
                </article>

                <article>
                  <span>03</span>
                  <h3>Construir</h3>
                  <p>
                    Desarrollamos frontend, backend, APIs e inteligencia artificial.
                  </p>
                </article>

                <article>
                  <span>04</span>
                  <h3>Lanzar</h3>
                  <p>
                    Llevamos el producto a producción y continuamos su evolución.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="cr-statement">
            <span className="cr-label">
              NUESTRA FORMA DE PENSAR
            </span>

            <h2>
              No desarrollamos tecnología porque sí.
              <span>
                {" "}Construimos productos que resuelven problemas reales.
              </span>
            </h2>
          </section>

          <section className="cr-section">
            <div className="cr-section-number">03</div>

            <div className="cr-section-content">
              <span className="cr-label">PRODUCTOS COREIA</span>

              <div className="cr-products-grid">
                <article className="cr-product">
                  <h3>FiguMatch</h3>

                  <p>
                    Plataforma para gestionar colecciones de figuritas,
                    encontrar coincidencias y facilitar intercambios.
                  </p>

                  <Link to="/proyectos/figumatch">
                    Conocer proyecto →
                  </Link>
                </article>

                <article className="cr-product">
                  <h3>PawTrace AI</h3>

                  <p>
                    Plataforma para conectar mascotas perdidas y encontradas
                    mediante geolocalización y tecnología.
                  </p>

                  <Link to="/proyectos/pawtrace">
                    Conocer proyecto →
                  </Link>
                </article>
              </div>
            </div>
          </section>

          <section className="cr-cta">
            <div>
              <span>¿CONSTRUIMOS ALGO JUNTOS?</span>

              <h2>
                De una idea a un producto en producción.
              </h2>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}