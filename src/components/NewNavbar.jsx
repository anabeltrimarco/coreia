import React from "react";

export default function NewNavbar({
  language = "en",
  setLanguage,
  t,
}) {
  const changeLanguage = (newLanguage) => {
    if (setLanguage) {
      setLanguage(newLanguage);
    }
  };

  return (
    <header className="coreia-navbar">
      <div className="coreia-navbar-inner">
        {/* =========================
            BRAND
        ========================== */}
        <a
          href="#top"
          className="coreia-brand"
          aria-label="Coreia - Home"
        >
          <span
            className="coreia-brand-symbol"
            aria-hidden="true"
          >
            <span></span>
            <span></span>
            <span></span>
            <i></i>
          </span>

          <span className="coreia-brand-copy">
            <strong>COREIA</strong>
            <small>WHERE IDEAS BECOME COMPANIES</small>
          </span>
        </a>

        {/* =========================
            NAVIGATION
        ========================== */}
        <nav
          className="coreia-nav-links"
          aria-label={
            language === "es"
              ? "Navegación principal"
              : "Main navigation"
          }
        >
          <a href="#work">
            {t?.nav?.work || "Work"}
          </a>

          <a href="#services">
            {t?.nav?.services || "Services"}
          </a>

          <a href="#studio">
            {t?.nav?.studio || "Studio"}
          </a>

          <a href="#contact">
            {t?.nav?.contact || "Contact"}
          </a>
        </nav>

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="coreia-nav-right">

          {/* LANGUAGE SWITCHER */}
          <div
            className="coreia-language-switcher"
            role="group"
            aria-label={
              language === "es"
                ? "Seleccionar idioma"
                : "Select language"
            }
          >
            {/* ARGENTINA */}
            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => changeLanguage("es")}
              aria-label="Español"
              aria-pressed={language === "es"}
              title="Español"
            >
              <img
                src="/data/flags/ar.svg"
                alt=""
                aria-hidden="true"
              />
            </button>

            {/* USA */}
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
              aria-label="English"
              aria-pressed={language === "en"}
              title="English"
            >
              <img
                src="/data/flags/us.svg"
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="coreia-nav-cta"
          >
            {t?.nav?.cta || "Start a project"}
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}