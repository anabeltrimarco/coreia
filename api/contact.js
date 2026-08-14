import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Método no permitido.",
    });
  }

  try {
    const {
      nombre,
      email,
      empresa,
      servicio,
      mensaje,
    } = req.body || {};

    if (!nombre || !email || !servicio || !mensaje) {
      return res.status(400).json({
        ok: false,
        message: "Faltan campos obligatorios.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Falta RESEND_API_KEY");

      return res.status(500).json({
        ok: false,
        message: "El servicio de correo no está configurado.",
      });
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeEmpresa = escapeHtml(empresa || "No indicada");
    const safeServicio = escapeHtml(servicio);
    const safeMensaje = escapeHtml(mensaje).replaceAll("\n", "<br />");

    /*
     * =====================================================
     * 1. EMAIL PARA COREIA
     * =====================================================
     */

    const {
      data: coreiaData,
      error: coreiaError,
    } = await resend.emails.send({
      from: "Coreia <hola@tudominio.com>",

      to: ["madebycoreia@gmail.com"],

      replyTo: email,

      subject: `Nueva consulta Coreia — ${servicio}`,

      html: `
        <!doctype html>
        <html>
          <body
            style="
              margin:0;
              padding:0;
              background:#f5f7fb;
              font-family:Arial,Helvetica,sans-serif;
              color:#152033;
            "
          >
            <div
              style="
                max-width:640px;
                margin:0 auto;
                padding:32px 18px;
              "
            >
              <div
                style="
                  background:#ffffff;
                  border:1px solid #e6eaf0;
                  border-radius:14px;
                  padding:28px;
                "
              >
                <div
                  style="
                    font-size:11px;
                    letter-spacing:2px;
                    font-weight:700;
                    color:#5366e8;
                    margin-bottom:10px;
                  "
                >
                  COREIA / NUEVA CONSULTA
                </div>

                <h1
                  style="
                    margin:0 0 24px;
                    font-size:24px;
                    line-height:1.2;
                  "
                >
                  Nueva consulta desde la web
                </h1>

                <table
                  style="
                    width:100%;
                    border-collapse:collapse;
                    font-size:14px;
                  "
                >
                  <tr>
                    <td
                      style="
                        padding:8px 0;
                        color:#667085;
                        width:120px;
                      "
                    >
                      Nombre
                    </td>

                    <td
                      style="
                        padding:8px 0;
                        font-weight:600;
                      "
                    >
                      ${safeNombre}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding:8px 0;
                        color:#667085;
                      "
                    >
                      Email
                    </td>

                    <td style="padding:8px 0;">
                      ${safeEmail}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding:8px 0;
                        color:#667085;
                      "
                    >
                      Empresa
                    </td>

                    <td style="padding:8px 0;">
                      ${safeEmpresa}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding:8px 0;
                        color:#667085;
                      "
                    >
                      Servicio
                    </td>

                    <td style="padding:8px 0;">
                      ${safeServicio}
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    height:1px;
                    background:#e7eaf0;
                    margin:22px 0;
                  "
                ></div>

                <div
                  style="
                    font-size:12px;
                    font-weight:700;
                    color:#667085;
                    margin-bottom:8px;
                  "
                >
                  PROYECTO / MENSAJE
                </div>

                <div
                  style="
                    font-size:14px;
                    line-height:1.65;
                    color:#283447;
                  "
                >
                  ${safeMensaje}
                </div>

                <div
                  style="
                    height:1px;
                    background:#e7eaf0;
                    margin:22px 0;
                  "
                ></div>

                <p
                  style="
                    margin:0;
                    font-size:12px;
                    color:#7b8494;
                  "
                >
                  Podés responder este email directamente para contestar a
                  ${safeNombre}.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (coreiaError) {
      console.error(
        "RESEND ERROR - CONSULTA COREIA:",
        coreiaError
      );

      return res.status(500).json({
        ok: false,
        message:
          coreiaError.message ||
          "No se pudo enviar la consulta.",
      });
    }

    /*
     * =====================================================
     * 2. RESPUESTA AUTOMÁTICA AL CLIENTE
     * =====================================================
     *
     * Si este segundo correo falla, NO devolvemos error al
     * formulario porque la consulta ya llegó a Coreia.
     */

    const {
      data: autoReplyData,
      error: autoReplyError,
    } = await resend.emails.send({
      from: "Coreia <onboarding@resend.dev>",

      to: [email],

      replyTo: "madebycoreia@gmail.com",

      subject: "Recibimos tu consulta — Coreia",

      html: `
        <!doctype html>
        <html>
          <body
            style="
              margin:0;
              padding:0;
              background:#050811;
              font-family:Arial,Helvetica,sans-serif;
              color:#ffffff;
            "
          >
            <div
              style="
                max-width:640px;
                margin:0 auto;
                padding:36px 18px;
              "
            >
              <div
                style="
                  background:
                    linear-gradient(
                      135deg,
                      #0b1020,
                      #07111d
                    );
                  border:1px solid #1b2942;
                  border-radius:16px;
                  padding:32px;
                "
              >
                <div
                  style="
                    font-size:11px;
                    letter-spacing:2px;
                    font-weight:700;
                    color:#7687ff;
                    margin-bottom:14px;
                  "
                >
                  COREIA
                </div>

                <h1
                  style="
                    margin:0 0 18px;
                    font-size:25px;
                    line-height:1.25;
                    color:#ffffff;
                  "
                >
                  Gracias por escribirnos, ${safeNombre}.
                </h1>

                <p
                  style="
                    margin:0 0 18px;
                    font-size:14px;
                    line-height:1.7;
                    color:#b8c1d2;
                  "
                >
                  Recibimos tu consulta correctamente.
                  Vamos a revisar la información que nos enviaste
                  y nos pondremos en contacto con vos a la brevedad.
                </p>

                <div
                  style="
                    margin:24px 0;
                    padding:16px 18px;
                    border:1px solid #1a2945;
                    border-radius:10px;
                    background:#080d18;
                  "
                >
                  <div
                    style="
                      font-size:10px;
                      letter-spacing:1.4px;
                      font-weight:700;
                      color:#6877ff;
                      margin-bottom:7px;
                    "
                  >
                    TU CONSULTA
                  </div>

                  <div
                    style="
                      font-size:14px;
                      font-weight:600;
                      color:#ffffff;
                      margin-bottom:6px;
                    "
                  >
                    ${safeServicio}
                  </div>

                  <div
                    style="
                      font-size:13px;
                      line-height:1.6;
                      color:#929db0;
                    "
                  >
                    ${safeMensaje}
                  </div>
                </div>

                <p
                  style="
                    margin:0;
                    font-size:14px;
                    line-height:1.7;
                    color:#b8c1d2;
                  "
                >
                  No necesitás tener todo definido.
                  Podemos ayudarte a transformar una idea,
                  un problema o una necesidad en un producto digital.
                </p>

                <div
                  style="
                    height:1px;
                    background:#1a2437;
                    margin:27px 0;
                  "
                ></div>

                <div
                  style="
                    font-size:14px;
                    font-weight:700;
                    color:#ffffff;
                    margin-bottom:5px;
                  "
                >
                  Coreia
                </div>

                <div
                  style="
                    font-size:11px;
                    line-height:1.6;
                    color:#818da3;
                  "
                >
                  Tecnología · Producto · Inteligencia Artificial
                </div>

                <div
                  style="
                    margin-top:10px;
                    font-size:10px;
                    letter-spacing:1px;
                    color:#6978ff;
                  "
                >
                  WHERE IDEAS BECOME COMPANIES
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (autoReplyError) {
      console.error(
        "RESEND ERROR - RESPUESTA AUTOMÁTICA:",
        autoReplyError
      );
    }

    /*
     * =====================================================
     * RESPUESTA DEL ENDPOINT
     * =====================================================
     */

    return res.status(200).json({
      ok: true,
      id: coreiaData?.id,
      autoReplySent: !autoReplyError,
      autoReplyId: autoReplyData?.id || null,
      message: "Consulta enviada correctamente.",
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return res.status(500).json({
      ok: false,
      message:
        "Ocurrió un error al enviar la consulta.",
    });
  }
}