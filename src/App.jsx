import { useEffect, useState } from "react";
import "./App.css";
import "./about-layout.css";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Terminal,
} from "lucide-react";

import About from "./components/About";
import DevOpsFlow from "./components/DevOpsFlow";
import DevOpsTerminal from "./components/DevOpsTerminal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SectionTransition from "./components/SectionTransition";
import Skills from "./components/Skills";

const githubUrl = "https://github.com/irish-saravananth";

const linkedinUrl =
  "https://www.linkedin.com/in/saravanan-t-h-b82130213";

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=saravananth2401@gmail.com";

const sections = [
  {
    id: "about",
    label: "ABOUT",
  },
  {
    id: "workflow",
    label: "WORKFLOW",
  },
  {
    id: "terminal",
    label: "TERMINAL",
  },
  {
    id: "skills",
    label: "SKILLS",
  },
  {
    id: "projects",
    label: "PROJECTS",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
  },
  {
    id: "contact",
    label: "CONTACT",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  /*
   * ---------------------------------------------------------
   * SECTION SCROLLING
   * ---------------------------------------------------------
   */

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar?.offsetHeight ?? 74;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      16;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  /*
   * ---------------------------------------------------------
   * ACTIVE SECTION DETECTION
   * ---------------------------------------------------------
   *
   * Using the section's position relative to the viewport is
   * more reliable here than IntersectionObserver because the
   * portfolio sections have animated wrappers.
   */

  useEffect(() => {
    const updateActiveSection = () => {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar?.offsetHeight ?? 74;

      const activationLine = navbarHeight + 120;

      let currentSection = sections[0].id;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (!element) {
          return;
        }

        const elementTop =
          element.getBoundingClientRect().top;

        if (elementTop <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection,
      );

      window.removeEventListener(
        "resize",
        updateActiveSection,
      );
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * INITIAL HASH
   * ---------------------------------------------------------
   *
   * If the page opens directly at:
   *
   * localhost:5173/#projects
   *
   * React may mount after the browser's native hash jump.
   * We explicitly perform the scroll after rendering.
   */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      return;
    }

    const isValidSection = sections.some(
      ({ id }) => id === hash,
    );

    if (!isValidSection) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(hash);
    }, 120);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * NAVIGATION HANDLER
   * ---------------------------------------------------------
   */

  const handleSectionNavigation = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(event) => {
              event.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              window.history.replaceState(
                null,
                "",
                window.location.pathname,
              );
            }}
          >
            STH
          </a>

          <div className="nav-links">
            <a
              href="#about"
              onClick={(event) =>
                handleSectionNavigation(event, "about")
              }
            >
              About
            </a>

            <a
              href="#skills"
              onClick={(event) =>
                handleSectionNavigation(event, "skills")
              }
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={(event) =>
                handleSectionNavigation(event, "projects")
              }
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={(event) =>
                handleSectionNavigation(event, "experience")
              }
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={(event) =>
                handleSectionNavigation(event, "contact")
              }
            >
              Contact
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-github"
            >
              <Code2 size={17} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-content">
            <div className="hero-badge">
              DEVOPS / DEVSECOPS / PLATFORM ENGINEER
            </div>

            <div className="hero-eyebrow">
              BUILD • AUTOMATE • SECURE • DEPLOY • MONITOR
            </div>

            <h1>
              Saravanan
              <span>TH</span>
            </h1>

            <p className="hero-description">
              Building automated, secure and reliable cloud-native
              platforms through CI/CD, infrastructure as code,
              containerization and continuous delivery.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="primary-button"
                onClick={(event) =>
                  handleSectionNavigation(event, "projects")
                }
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>

              <a
                href={emailUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Terminal size={17} />
                Email
              </a>
            </div>
          </div>

          {/* Original Hero Terminal — intentionally kept simple */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="terminal-title">
                devops@production:~
              </span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">
                  whoami
                </span>
              </div>

              <div className="terminal-output">
                saravanan / devops-engineer
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">
                  kubectl get pods
                </span>
              </div>

              <div className="terminal-output">
                <span className="terminal-success">
                  ●
                </span>{" "}
                application Running
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">
                  terraform apply
                </span>
              </div>

              <div className="terminal-output">
                Infrastructure successfully provisioned
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">
                  pipeline status
                </span>
              </div>

              <div className="terminal-output terminal-success">
                ✓ Build → Scan → Deploy
              </div>

              <div className="terminal-muted">_</div>
            </div>
          </div>

          <a
            href="#about"
            className="scroll-indicator"
            aria-label="Scroll to About"
            onClick={(event) =>
              handleSectionNavigation(event, "about")
            }
          >
            <ArrowDown size={17} />
          </a>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <SectionTransition>
          <About />
        </SectionTransition>

        {/* =====================================================
            ENGINEERING WORKFLOW
        ===================================================== */}

        <SectionTransition>
          <DevOpsFlow />
        </SectionTransition>

        {/* =====================================================
            DEVOPS TERMINAL
        ===================================================== */}

        <SectionTransition>
          <DevOpsTerminal />
        </SectionTransition>

        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <SectionTransition>
          <Skills />
        </SectionTransition>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <SectionTransition>
          <Projects />
        </SectionTransition>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <SectionTransition>
          <Experience />
        </SectionTransition>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <SectionTransition>
          <section className="contact-section" id="contact">
            <div className="contact-grid">
              <div className="contact-heading">
                <p className="section-kicker">CONTACT</p>

                <h2>
                  Let's build something
                  <br />
                  reliable.
                </h2>

                <p className="contact-description">
                  Open to DevOps, DevSecOps and cloud engineering
                  opportunities, projects and technical
                  collaborations.
                </p>

                <div className="contact-actions">
                  <a
                    href={emailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Get in touch
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <div className="contact-terminal">
                <div className="contact-terminal-line">
                  <span className="contact-terminal-prompt">
                    $
                  </span>
                  <strong>status</strong>
                </div>

                <div className="contact-terminal-line">
                  <span className="contact-terminal-prompt">
                    ✓
                  </span>
                  Open to opportunities
                </div>

                <div className="contact-terminal-line">
                  <span className="contact-terminal-prompt">
                    $
                  </span>
                  <strong>focus</strong>
                </div>

                <div className="contact-terminal-line">
                  <span />
                  DevOps · DevSecOps · Cloud
                </div>

                <div className="contact-terminal-line">
                  <span className="contact-terminal-prompt">
                    $
                  </span>
                  <strong>stack</strong>
                </div>

                <div className="contact-terminal-line">
                  <span />
                  Azure · AWS · Kubernetes · Terraform
                </div>

                <div className="contact-terminal-line">
                  <span className="contact-terminal-prompt">
                    $
                  </span>
                  <strong>email</strong>
                </div>

                <div className="contact-terminal-line">
                  <span />

                  <a
                    href={emailUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    saravananth2401@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-links">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href={emailUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Email
                <ArrowUpRight size={14} />
              </a>
            </div>

            <footer className="footer">
              <div className="footer-logo">STH</div>

              <div className="footer-role">
                DEVOPS / DEVSECOPS ENGINEER
              </div>

              <div className="footer-tagline">
                BUILD · AUTOMATE · SECURE · DEPLOY
              </div>
            </footer>
          </section>
        </SectionTransition>
      </main>

      {/* =======================================================
          SECTION PROGRESS NAVIGATION
      ======================================================= */}

      <div
        className="section-progress"
        aria-label="Section navigation"
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={
              activeSection === id
                ? "section-progress-dot section-progress-dot--active"
                : "section-progress-dot"
            }
            aria-label={`Go to ${label}`}
            title={label}
            onClick={(event) =>
              handleSectionNavigation(event, id)
            }
          >
            <span className="section-progress-label">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;