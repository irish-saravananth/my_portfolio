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
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const githubUrl = "https://github.com/irish-saravananth";

const linkedinUrl =
  "https://www.linkedin.com/in/saravanan-t-h-b82130213";

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=saravananth2401@gmail.com";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="nav-logo">
            STH
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>

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
        {/* HERO */}

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
              Building automated, secure and reliable cloud-native platforms
              through CI/CD, infrastructure as code, containerization and
              continuous delivery.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
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
                <span className="terminal-command">whoami</span>
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
                <span className="terminal-success">●</span>{" "}
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
          >
            <ArrowDown size={17} />
          </a>
        </section>

        <About />

        <DevOpsFlow />

        <Skills />

        <Projects />

        <Experience />

        {/* CONTACT */}

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
                Open to DevOps, DevSecOps and cloud engineering opportunities,
                projects and technical collaborations.
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
                <span className="contact-terminal-prompt">$</span>
                <strong>status</strong>
              </div>

              <div className="contact-terminal-line">
                <span className="contact-terminal-prompt">✓</span>
                Open to opportunities
              </div>

              <div className="contact-terminal-line">
                <span className="contact-terminal-prompt">$</span>
                <strong>focus</strong>
              </div>

              <div className="contact-terminal-line">
                <span />
                DevOps · DevSecOps · Cloud
              </div>

              <div className="contact-terminal-line">
                <span className="contact-terminal-prompt">$</span>
                <strong>stack</strong>
              </div>

              <div className="contact-terminal-line">
                <span />
                Azure · AWS · Kubernetes · Terraform
              </div>

              <div className="contact-terminal-line">
                <span className="contact-terminal-prompt">$</span>
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
      </main>
    </div>
  );
}

export default App;