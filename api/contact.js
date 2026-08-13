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

    const { data, error } = await resend.emails.send({
      /*
       * PARA LAS PRIMERAS PRUEBAS:
       * onboarding@resend.dev funciona únicamente con el email
       * asociado a tu cuenta Resend como destinatario.
       */
      from: "Coreia Web <onboarding@resend.dev>",

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
                    <td style="padding:8px 0;color:#667085;width:120px;">
                      Nombre
                    </td>
                    <td style="padding:8px 0;font-weight:600;">
                      ${safeNombre}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0;color:#667085;">
                      Email
                    </td>
                    <td style="padding:8px 0;">
                      ${safeEmail}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0;color:#667085;">
                      Empresa
                    </td>
                    <td style="padding:8px 0;">
                      ${safeEmpresa}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0;color:#667085;">
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

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(500).json({
        ok: false,
        message: error.message || "No se pudo enviar el correo.",
      });
    }

    return res.status(200).json({
      ok: true,
      id: data?.id,
      message: "Consulta enviada correctamente.",
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return res.status(500).json({
      ok: false,
      message: "Ocurrió un error al enviar la consulta.",
    });
  }
}