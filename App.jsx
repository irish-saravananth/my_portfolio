import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          STH<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/irish-saravananth"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          <Github size={17} />
          GitHub
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              DEVOPS / DEVSECOPS ENGINEER
            </div>

            <p className="hero-label">
              <Terminal size={16} />
              BUILD • AUTOMATE • SECURE • DEPLOY
            </p>

            <h1>
              Saravanan
              <br />
              <span>T H.</span>
            </h1>

            <p className="hero-description">
              Building automated, secure and reliable cloud-native platforms
              through CI/CD, Infrastructure as Code (IaC), containerization and
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

            <div className="social-links">
              <a
                href="https://github.com/irish-saravananth"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saravanan-t-h-b82130213"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} />
                LinkedIn
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

              <span>devops@production:~</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-prompt">$</span> whoami
              </p>

              <p className="terminal-output">
                saravanan / devops-engineer
              </p>

              <p>
                <span className="terminal-prompt">$</span> kubectl get pods
              </p>

              <p className="terminal-output">
                <span className="success">●</span> application Running
              </p>

              <p>
                <span className="terminal-prompt">$</span> terraform apply
              </p>

              <p className="terminal-output">
                Infrastructure successfully provisioned
              </p>

              <p>
                <span className="terminal-prompt">$</span> pipeline status
              </p>

              <p className="terminal-output">
                <span className="success">✓</span> Build
                <span className="separator">→</span>
                Scan
                <span className="separator">→</span>
                Deploy
              </p>

              <p className="terminal-cursor">_</p>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <ArrowDown size={17} />
            Scroll to explore
          </a>
        </section>

        <section className="placeholder-section" id="about">
          <span>01</span>
          <h2>About</h2>
          <p>Coming next...</p>
        </section>

        <section className="placeholder-section" id="skills">
          <span>02</span>
          <h2>Skills</h2>
          <p>Coming next...</p>
        </section>

        <section className="placeholder-section" id="projects">
          <span>03</span>
          <h2>Projects</h2>
          <p>Coming next...</p>
        </section>

        <section className="placeholder-section" id="experience">
          <span>04</span>
          <h2>Experience</h2>
          <p>Coming next...</p>
        </section>

        <section className="placeholder-section" id="contact">
          <span>05</span>
          <h2>Contact</h2>
          <p>Coming next...</p>
        </section>
      </main>
    </div>
  );
}

export default App;