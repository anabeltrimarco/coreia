import React, { useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import translations from "../data/translations";
import "../styles/coreia-new.css";

export default function NewHome({
  language = "en",
  setLanguage,
}) {
  const t = translations[language] || translations.en;

  useEffect(() => {
    const elements = document.querySelectorAll(".coreia-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <div className="coreia-site" id="top">
      <NewNavbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="coreia-hero">
          <div className="coreia-container coreia-hero-grid">
            <div className="coreia-hero-content coreia-hero-enter">
              <div className="coreia-eyebrow">
                <span />
                {t.hero.eyebrow}
              </div>

              <h1>
                {t.hero.title1}
                <br />
                <span>{t.hero.title2}</span>
              </h1>

              <p>
                {t.hero.description}
              </p>

              <div className="coreia-hero-actions">
                <a
                  href="#work"
                  className="coreia-primary-link"
                >
                  {t.hero.explore}

                  <span>
                    ↗
                  </span>
                </a>

                <span className="coreia-hero-location">
                  {t.hero.location}
                </span>
              </div>
            </div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}
            <div
              className="coreia-hero-visual coreia-hero-visual-enter"
              aria-hidden="true"
            >
              <div className="coreia-orbit coreia-orbit-one" />
              <div className="coreia-orbit coreia-orbit-two" />

              <div className="coreia-symbol-large">
                <div className="coreia-c-ring ring-one" />
                <div className="coreia-c-ring ring-two" />
                <div className="coreia-c-ring ring-three" />

                <div className="coreia-flow-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <span className="coreia-node node-one" />
              <span className="coreia-node node-two" />
              <span className="coreia-node node-three" />

              <div className="coreia-system-label label-one">
                PRODUCT
              </div>

              <div className="coreia-system-label label-two">
                AI
              </div>

              <div className="coreia-system-label label-three">
                BUILD
              </div>
            </div>
          </div>

          {/* =================================================
              PROCESS
          ================================================= */}
          <div className="coreia-container">
            <div className="coreia-process-preview coreia-hero-process-enter">
              <div>
                <span>01</span>
                <strong>
                  {t.process.idea}
                </strong>
              </div>

              <i>→</i>

              <div>
                <span>02</span>
                <strong>
                  {t.process.strategy}
                </strong>
              </div>

              <i>→</i>

              <div>
                <span>03</span>
                <strong>
                  {t.process.build}
                </strong>
              </div>

              <i>→</i>

              <div>
                <span>04</span>
                <strong>
                  {t.process.ai}
                </strong>
              </div>

              <i>→</i>

              <div>
                <span>05</span>
                <strong>
                  {t.process.product}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SELECTED WORK
        ====================================================== */}
        <section
          className="coreia-work"
          id="work"
        >
          <div className="coreia-container">
            <div className="coreia-work-heading coreia-reveal">
              <span>
                {t.work.eyebrow}
              </span>

              <div>
                <h2>
                  {t.work.title1}
                  <br />
                  {t.work.title2}
                </h2>

                <p>
                  {t.work.description}
                </p>
              </div>
            </div>

            <div className="coreia-work-grid">
              {/* =================================================
                  AGENTOFFICE AI
              ================================================= */}
              <article className="coreia-work-card coreia-reveal coreia-delay-1">
                <div className="coreia-work-card-top">
                  <span>01</span>

                  <span>
                    {t.work.agentoffice.category}
                  </span>
                </div>

                <div className="coreia-work-visual real-project">
                  <img
                    src="/projects/agentoffice-ai.png"
                    alt="AgentOffice AI dashboard"
                    className="coreia-project-image"
                  />

                  <span className="coreia-project-status">
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className="coreia-work-info">
                  <div>
                    <h3>
                      {t.work.agentoffice.title}
                    </h3>

                    <p>
                      {t.work.agentoffice.description}
                    </p>
                  </div>

                  <span className="coreia-work-action">
                    {t.work.comingSoon}
                  </span>
                </div>
              </article>

              {/* =================================================
                  PAWTRACE AI
              ================================================= */}
              <article className="coreia-work-card coreia-reveal coreia-delay-2">
                <div className="coreia-work-card-top">
                  <span>02</span>

                  <span>
                    {t.work.pawtrace.category}
                  </span>
                </div>

                <div className="coreia-work-visual real-project pawtrace-real">
                  <img
                    src="/projects/pawtrace-ai.png"
                    alt="PawTrace AI platform"
                    className="coreia-project-image"
                  />
                </div>

                <div className="coreia-work-info">
                  <div>
                    <h3>
                      {t.work.pawtrace.title}
                    </h3>

                    <p>
                      {t.work.pawtrace.description}
                    </p>
                  </div>

                  <a
                    href="https://paw-trace-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coreia-work-action"
                  >
                    {t.work.viewProject}
                  </a>
                </div>
              </article>

              {/* =================================================
                  GUARDIAN AI
              ================================================= */}
              <article className="coreia-work-card coreia-reveal coreia-delay-1">
                <div className="coreia-work-card-top">
                  <span>03</span>

                  <span>
                    {t.work.guardian.category}
                  </span>
                </div>

                <div className="coreia-work-visual real-project guardian-real">
                  <img
                    src="/projects/guardian-ai.png"
                    alt="GuardianAI fraud analysis platform"
                    className="coreia-project-image"
                  />

                  <span className="coreia-project-status">
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className="coreia-work-info">
                  <div>
                    <h3>
                      {t.work.guardian.title}
                    </h3>

                    <p>
                      {t.work.guardian.description}
                    </p>
                  </div>

                  <span className="coreia-work-action">
                    {t.work.comingSoon}
                  </span>
                </div>
              </article>

              {/* =================================================
                  FIGUMATCH
              ================================================= */}
              <article className="coreia-work-card coreia-reveal coreia-delay-2">
                <div className="coreia-work-card-top">
                  <span>04</span>

                  <span>
                    {t.work.figumatch.category}
                  </span>
                </div>

                <div className="coreia-work-visual real-project figumatch-real">
                  <img
                    src="/projects/figumatch.png"
                    alt="FiguMatch digital sticker album"
                    className="coreia-project-image"
                  />
                </div>

                <div className="coreia-work-info">
                  <div>
                    <h3>
                      {t.work.figumatch.title}
                    </h3>

                    <p>
                      {t.work.figumatch.description}
                    </p>
                  </div>

                  <a
                    href="https://figu-match-fcju-coreia.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coreia-work-action"
                  >
                    {t.work.viewProject}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}
        <section
          className="coreia-capabilities"
          id="services"
        >
          <div className="coreia-container">
            <div className="coreia-capabilities-heading coreia-reveal">
              <span>
                {t.capabilities.eyebrow}
              </span>

              <div>
                <h2>
                  {t.capabilities.title1}
                  <br />
                  {t.capabilities.title2}
                </h2>

                <p>
                  {t.capabilities.description}
                </p>
              </div>
            </div>

            <div className="coreia-capabilities-list">
              {/* PRODUCT STRATEGY */}
              <article className="coreia-capability-row coreia-reveal">
                <span className="coreia-capability-number">
                  01
                </span>

                <h3>
                  {t.capabilities.strategy.title}
                </h3>

                <p>
                  {t.capabilities.strategy.description}
                </p>
              </article>

              {/* PRODUCT DESIGN */}
              <article className="coreia-capability-row coreia-reveal coreia-delay-1">
                <span className="coreia-capability-number">
                  02
                </span>

                <h3>
                  {t.capabilities.design.title}
                </h3>

                <p>
                  {t.capabilities.design.description}
                </p>
              </article>

              {/* ENGINEERING */}
              <article className="coreia-capability-row coreia-reveal coreia-delay-2">
                <span className="coreia-capability-number">
                  03
                </span>

                <h3>
                  {t.capabilities.engineering.title}
                </h3>

                <p>
                  {t.capabilities.engineering.description}
                </p>
              </article>

              {/* ARTIFICIAL INTELLIGENCE */}
              <article className="coreia-capability-row coreia-reveal coreia-delay-3">
                <span className="coreia-capability-number">
                  04
                </span>

                <h3>
                  {t.capabilities.ai.title}
                </h3>

                <p>
                  {t.capabilities.ai.description}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            STUDIO
        ====================================================== */}
        <section
          className="coreia-studio"
          id="studio"
        >
          <div className="coreia-container">
            <div className="coreia-studio-grid">
              <div className="coreia-studio-left coreia-reveal">
                <span>
                  {t.studio.eyebrow}
                </span>

                <h2>
                  {t.studio.title1}
                  <br />
                  {t.studio.title2}
                </h2>
              </div>

              <div className="coreia-studio-right coreia-reveal coreia-delay-1">
                <p>
                  {t.studio.p1}
                </p>

                <p>
                  {t.studio.p2}
                </p>

                <div className="coreia-studio-meta">
                  <div>
                    <span>
                      {t.studio.basedIn}
                    </span>

                    <strong>
                      {t.studio.basedInValue}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t.studio.focus}
                    </span>

                    <strong>
                      {t.studio.focusValue}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t.studio.model}
                    </span>

                    <strong>
                      {t.studio.modelValue}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <section
          className="coreia-contact-preview"
          id="contact"
        >
          <div className="coreia-container coreia-reveal">
            <span>
              {t.contact.eyebrow}
            </span>

            <h2>
              {t.contact.title1}
              <br />
              {t.contact.title2}
            </h2>

            <a href="mailto:madebycoreia@gmail.com">
              madebycoreia@gmail.com ↗
            </a>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="coreia-footer">
        <div className="coreia-container">
          <div className="coreia-footer-top">
            <div className="coreia-footer-brand">
              <strong>
                COREIA
              </strong>

              <span>
                {t.footer.tagline}
              </span>
            </div>

            <div className="coreia-footer-location">
              <span>
                {t.footer.basedIn}
              </span>

              <strong>
                Buenos Aires · Argentina
              </strong>
            </div>

            <div className="coreia-footer-social">
              <a
                href="https://www.linkedin.com/company/coreia-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coreia on LinkedIn"
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="coreia-footer-bottom">
            <span>
              © 2026 COREIA
            </span>

            <a href="#top">
              {t.footer.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}