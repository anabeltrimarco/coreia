import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contacto.css";

export default function Contacto() {
  const [estado, setEstado] = useState("idle");
  const [mensajeEstado, setMensajeEstado] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const datos = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      servicio: formData.get("servicio"),
      mensaje: formData.get("mensaje"),
    };

    try {
      setEstado("sending");
      setMensajeEstado("");

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(datos),
      });

      const resultado = await response.json();

      if (!response.ok) {
        throw new Error(
          resultado?.message || "No se pudo enviar la consulta."
        );
      }

      setEstado("success");

      setMensajeEstado(
        "Consulta enviada correctamente. Gracias por contactarnos."
      );

      form.reset();
    } catch (error) {
      console.error("ERROR CONTACTO:", error);

      setEstado("error");

      setMensajeEstado(
        error.message ||
          "No pudimos enviar la consulta. Intentá nuevamente."
      );
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-container">
          <header className="contact-header">
            <div className="contact-eyebrow">
              <span></span>
              COREIA / CONTACTO
            </div>

            <div className="contact-header-grid">
              <div>
                <h1>
                  ¿Tenés una idea?
                  <span>
                    {" "}
                    Hablemos de cómo convertirla en producto.
                  </span>
                </h1>
              </div>

              <p>
                Contanos qué querés construir, mejorar o automatizar.
                Analizamos tu proyecto y vemos cómo llevarlo a una solución
                digital.
              </p>
            </div>
          </header>

          <section className="contact-content">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="nombre">
                    Nombre
                  </label>

                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="empresa">
                    Empresa
                    <span> opcional</span>
                  </label>

                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="servicio">
                    ¿En qué podemos ayudarte?
                  </label>

                  <select
                    id="servicio"
                    name="servicio"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Seleccionar
                    </option>

                    <option value="MVP & Producto Digital">
                      MVP & Producto Digital
                    </option>

                    <option value="Desarrollo Web">
                      Desarrollo Web
                    </option>

                    <option value="Inteligencia Artificial">
                      Inteligencia Artificial
                    </option>

                    <option value="Automatización">
                      Automatización
                    </option>

                    <option value="Otro">
                      Otro
                    </option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="mensaje">
                  Contanos sobre tu proyecto
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="6"
                  placeholder="Contanos brevemente qué querés construir, mejorar o resolver..."
                  required
                />
              </div>

              <div className="contact-form-bottom">
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={estado === "sending"}
                >
                  {estado === "sending"
                    ? "Enviando..."
                    : "Enviar consulta"}

                  {estado !== "sending" && (
                    <span>→</span>
                  )}
                </button>

                {mensajeEstado && (
                  <p
                    className={`contact-message ${estado}`}
                  >
                    {mensajeEstado}
                  </p>
                )}
              </div>
            </form>

            <aside className="contact-aside">
              <span className="contact-aside-label">
                ¿QUÉ PODÉS CONTARNOS?
              </span>

              <h2>
                No necesitás tener todo definido.
              </h2>

              <p>
                Una idea, un problema o un proceso que quieras mejorar es
                suficiente para empezar.
              </p>

              <div className="contact-aside-line"></div>

              <div className="contact-brand">
                <strong>COREIA</strong>

                <p>
                  Tecnología · Producto · Inteligencia Artificial
                </p>

                <span>
                  Where ideas become companies.
                </span>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}