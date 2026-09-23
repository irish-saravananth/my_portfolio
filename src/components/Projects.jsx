import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  GitBranch,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const project = {
  title: "Secure Banking Transaction Portal",
  subtitle: "End-to-End DevSecOps Platform",
  description:
    "A cloud-native banking transaction application demonstrating automated CI/CD, security validation, containerization, Kubernetes orchestration, GitOps deployment and continuous observability.",
  github:
    "https://github.com/irish-saravananth/secure-banking-transaction-portal",
};

const pipeline = [
  {
    icon: GitBranch,
    title: "SOURCE",
    text: "GitHub",
  },
  {
    icon: CheckCircle2,
    title: "BUILD",
    text: "GitHub Actions",
  },
  {
    icon: ShieldCheck,
    title: "SECURE",
    text: "SonarQube · Bandit · Trivy · Snyk",
  },
  {
    icon: Boxes,
    title: "CONTAINERIZE",
    text: "Docker · GHCR",
  },
  {
    icon: Boxes,
    title: "ORCHESTRATE",
    text: "Kubernetes · HPA",
  },
  {
    icon: GitBranch,
    title: "GITOPS",
    text: "Argo CD",
  },
  {
    icon: Gauge,
    title: "OBSERVE",
    text: "Prometheus · Grafana",
  },
];

const technologies = [
  "Python",
  "Flask",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "Kind",
  "HPA",
  "SonarQube",
  "Bandit",
  "Trivy",
  "Snyk",
  "GHCR",
  "Argo CD",
  "Prometheus",
  "Grafana",
  "Helm",
  "Alertmanager",
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-kicker">PROJECTS</p>
          <h2>Engineering projects built around delivery.</h2>
        </div>
      </div>

      <div className="project-feature">
        <div className="project-header">
          <div>
            <p className="project-eyebrow">FLAGSHIP PROJECT</p>

            <h3>{project.title}</h3>

            <p className="project-subtitle">{project.subtitle}</p>
          </div>

          <a
            className="project-github"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-metrics">
          <div>
            <strong>80%</strong>
            <span>Manual deployment effort reduced</span>
          </div>

          <div>
            <strong>7</strong>
            <span>Delivery stages</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Observability mindset</span>
          </div>
        </div>

        <div className="pipeline-heading">
          <span>DELIVERY PIPELINE</span>
          <span>BUILD → SECURE → DEPLOY → OBSERVE</span>
        </div>

        <div className="project-pipeline">
          {pipeline.map(({ icon: Icon, title, text }, index) => (
            <div className="pipeline-step" key={title}>
              <div className="pipeline-icon">
                <Icon size={18} />
              </div>

              <span className="pipeline-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="project-bottom">
          <div>
            <p className="project-eyebrow">TECHNOLOGIES</p>

            <div className="project-tech">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;