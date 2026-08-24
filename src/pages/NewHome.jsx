import React, { useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import "../styles/coreia-new.css";

export default function NewHome() {
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
  }, []);

  return (
    <div className="coreia-site" id="top">
      <NewNavbar />

      <main>
        <section className="coreia-hero">
          <div className="coreia-container coreia-hero-grid">
            <div className="coreia-hero-content coreia-hero-enter">
              <div className="coreia-eyebrow">
                <span />
                DIGITAL PRODUCT STUDIO
              </div>

              <h1>
                We turn ideas
                <br />
                into <span>products.</span>
              </h1>

              <p>
                Strategy, design, software and artificial intelligence
                for ideas worth building.
              </p>

              <div className="coreia-hero-actions">
                <a href="#work" className="coreia-primary-link">
                  Explore our work
                  <span>↗</span>
                </a>

                <span className="coreia-hero-location">
                  Buenos Aires · Argentina
                </span>
              </div>
            </div>

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

              <div className="coreia-system-label label-one">PRODUCT</div>
              <div className="coreia-system-label label-two">AI</div>
              <div className="coreia-system-label label-three">BUILD</div>
            </div>
          </div>

          <div className="coreia-container">
            <div className="coreia-process-preview coreia-hero-process-enter">
              <div>
                <span>01</span>
                <strong>Idea</strong>
              </div>

              <i>→</i>

              <div>
                <span>02</span>
                <strong>Strategy</strong>
              </div>

              <i>→</i>

              <div>
                <span>03</span>
                <strong>Build</strong>
              </div>

              <i>→</i>

              <div>
                <span>04</span>
                <strong>AI</strong>
              </div>

              <i>→</i>

              <div>
                <span>05</span>
                <strong>Product</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="coreia-work" id="work">
          <div className="coreia-container">
            <div className="coreia-work-heading coreia-reveal">
              <span>SELECTED WORK</span>

              <div>
                <h2>
                  Products built
                  <br />
                  with purpose.
                </h2>

                <p>
                  Strategy, software and artificial intelligence
                  transformed into real digital products.
                </p>
              </div>
            </div>

            <div className="coreia-work-grid">
              <article className="coreia-work-card coreia-reveal coreia-delay-1">
                <div className="coreia-work-card-top">
                  <span>01</span>
                  <span>AI · PRODUCTIVITY · BUSINESS</span>
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
                    <h3>AgentOffice AI</h3>

                    <p>
                      An intelligent business workspace that brings
                      clients, tasks, follow-ups and AI assistance
                      into one place.
                    </p>
                  </div>

                  <span className="coreia-work-action">
                    Coming soon
                  </span>
                </div>
              </article>

              <article className="coreia-work-card coreia-reveal coreia-delay-2">
                <div className="coreia-work-card-top">
                  <span>02</span>
                  <span>AI · GEOLOCATION · MATCHING</span>
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
                    <h3>PawTrace AI</h3>

                    <p>
                      Technology designed to reconnect lost pets
                      with their homes through reports, maps and
                      intelligent matching.
                    </p>
                  </div>

                  <a
                    href="https://paw-trace-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coreia-work-action"
                  >
                    View project ↗
                  </a>
                </div>
              </article>

              <article className="coreia-work-card coreia-reveal coreia-delay-1">
                <div className="coreia-work-card-top">
                  <span>03</span>
                  <span>AI · SECURITY · FRAUD DETECTION</span>
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
                    <h3>GuardianAI</h3>

                    <p>
                      Artificial intelligence that analyzes digital
                      content and helps identify scams, suspicious
                      behavior and online threats.
                    </p>
                  </div>

                  <span className="coreia-work-action">
                    Coming soon
                  </span>
                </div>
              </article>

              <article className="coreia-work-card coreia-reveal coreia-delay-2">
                <div className="coreia-work-card-top">
                  <span>04</span>
                  <span>COMMUNITY · COLLECTION · PLATFORM</span>
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
                    <h3>FiguMatch</h3>

                    <p>
                      A digital platform for managing collections,
                      finding missing stickers and connecting people
                      who want to exchange duplicates.
                    </p>
                  </div>

                  <a
                    href="https://figu-match-fcju-coreia.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coreia-work-action"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="coreia-capabilities" id="services">
          <div className="coreia-container">
            <div className="coreia-capabilities-heading coreia-reveal">
              <span>CAPABILITIES</span>

              <div>
                <h2>
                  From idea
                  <br />
                  to product.
                </h2>

                <p>
                  Strategy, design, engineering and artificial intelligence
                  working as one product system.
                </p>
              </div>
            </div>

            <div className="coreia-capabilities-list">
              <article className="coreia-capability-row coreia-reveal">
                <span className="coreia-capability-number">01</span>

                <h3>Product Strategy</h3>

                <p>
                  Research · Product definition · Positioning · Roadmap
                </p>
              </article>

              <article className="coreia-capability-row coreia-reveal coreia-delay-1">
                <span className="coreia-capability-number">02</span>

                <h3>Product Design</h3>

                <p>
                  UX · UI · Prototyping · Design systems
                </p>
              </article>

              <article className="coreia-capability-row coreia-reveal coreia-delay-2">
                <span className="coreia-capability-number">03</span>

                <h3>Engineering</h3>

                <p>
                  Frontend · Backend · APIs · Databases · Cloud
                </p>
              </article>

              <article className="coreia-capability-row coreia-reveal coreia-delay-3">
                <span className="coreia-capability-number">04</span>

                <h3>Artificial Intelligence</h3>

                <p>
                  Generative AI · Automation · Agents · Intelligent systems
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="coreia-studio" id="studio">
          <div className="coreia-container">
            <div className="coreia-studio-grid">
              <div className="coreia-studio-left coreia-reveal">
                <span>COREIA</span>

                <h2>
                  We build digital products
                  <br />
                  from idea to launch.
                </h2>
              </div>

              <div className="coreia-studio-right coreia-reveal coreia-delay-1">
                <p>
                  Coreia is an independent digital product studio
                  focused on strategy, design, software engineering
                  and artificial intelligence.
                </p>

                <p>
                  We turn early ideas into real products, combining
                  product thinking with technology to create useful,
                  scalable and meaningful digital experiences.
                </p>

                <div className="coreia-studio-meta">
                  <div>
                    <span>BASED IN</span>
                    <strong>Buenos Aires · Argentina</strong>
                  </div>

                  <div>
                    <span>FOCUS</span>
                    <strong>Product · Software · AI</strong>
                  </div>

                  <div>
                    <span>MODEL</span>
                    <strong>Independent Studio</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="coreia-contact-preview" id="contact">
          <div className="coreia-container coreia-reveal">
            <span>START A PROJECT</span>

            <h2>
              Have an idea
              <br />
              worth building?
            </h2>

            <a href="mailto:madebycoreia@gmail.com">
              madebycoreia@gmail.com ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="coreia-footer">
        <div className="coreia-container">
          <div className="coreia-footer-top">
            <div className="coreia-footer-brand">
              <strong>COREIA</strong>
              <span>Where ideas become companies</span>
            </div>

            <div className="coreia-footer-location">
              <span>BASED IN</span>
              <strong>Buenos Aires · Argentina</strong>
            </div>

            <div className="coreia-footer-social">
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
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
            <span>© 2026 COREIA</span>

            <a href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}