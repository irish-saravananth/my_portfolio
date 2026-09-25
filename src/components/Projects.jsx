import { useState } from "react";
import {
  Activity,
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Code2,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import "./Projects.css";

const projectPanels = [
  {
    id: "overview",
    label: "OVERVIEW",
  },
  {
    id: "pipeline",
    label: "PIPELINE",
  },
  {
    id: "security",
    label: "SECURITY",
  },
  {
    id: "observability",
    label: "OBSERVABILITY",
  },
];

const pipelineSteps = [
  {
    number: "01",
    title: "SOURCE",
    tool: "Git · GitHub",
    icon: GitBranch,
    detail:
      "Application source and deployment configuration are maintained in Git and GitHub.",
  },
  {
    number: "02",
    title: "BUILD",
    tool: "GitHub Actions",
    icon: Workflow,
    detail:
      "Automated CI builds the application and runs quality and security validation before image delivery.",
  },
  {
    number: "03",
    title: "SECURE",
    tool: "SonarQube · Bandit · Snyk · Trivy · OWASP ZAP",
    icon: ShieldCheck,
    detail:
      "Security validation covers code quality, static analysis, dependency vulnerabilities, container scanning and dynamic testing.",
  },
  {
    number: "04",
    title: "CONTAINER",
    tool: "Docker",
    icon: Container,
    detail:
      "The Flask application is packaged as a container image for repeatable deployment.",
  },
  {
    number: "05",
    title: "REGISTRY",
    tool: "GitHub Container Registry",
    icon: PackageCheck,
    detail:
      "Built images are versioned and managed through GitHub Container Registry.",
  },
  {
    number: "06",
    title: "KUBERNETES",
    tool: "Kind · HPA",
    icon: Boxes,
    detail:
      "The application runs on Kubernetes with deployment resources and Horizontal Pod Autoscaling.",
  },
  {
    number: "07",
    title: "GITOPS",
    tool: "Argo CD",
    icon: Cloud,
    detail:
      "Argo CD continuously synchronizes Kubernetes resources from source-controlled configuration.",
  },
  {
    number: "08",
    title: "MONITOR",
    tool: "Prometheus · Grafana",
    icon: Activity,
    detail:
      "Prometheus and Grafana provide visibility into application, pod, node and cluster metrics.",
  },
];

const securityItems = [
  "SonarQube",
  "Bandit",
  "Snyk",
  "Trivy",
  "OWASP ZAP",
  "SAST",
  "SCA",
  "DAST",
];

const observabilityItems = [
  "Prometheus",
  "Grafana",
  "Alertmanager",
  "Node Exporter",
  "kube-state-metrics",
  "CPU metrics",
  "Memory metrics",
  "Pod health",
];

function Projects() {
  const [activePanel, setActivePanel] = useState("overview");
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  const selectedStep = pipelineSteps[activePipelineStep];

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-kicker">PROJECTS</p>

          <h2>Engineering work, built end to end.</h2>
        </div>
      </div>

      <article className="interactive-project">
        <div className="interactive-project-header">
          <div>
            <p className="project-eyebrow">
              M.TECH PROJECT — SOFTWARE SYSTEMS
            </p>

            <h3>Secure Banking Transaction Portal</h3>

            <p className="project-subtitle">
              END-TO-END DEVSECOPS · CI/CD · GITOPS · KUBERNETES
              · MONITORING
            </p>
          </div>

          <a
            href="https://github.com/irish-saravananth/secure-banking-transaction-portal"
            target="_blank"
            rel="noreferrer"
            className="interactive-project-github"
          >
            <Code2 size={16} />
            Repository
          </a>
        </div>

        <p className="interactive-project-description">
          A DevSecOps demonstration platform built with Python and
          Flask, covering secure software delivery, containerization,
          Kubernetes orchestration, GitOps deployment, automated
          security scanning and cloud-native monitoring.
        </p>

        <div className="interactive-project-metrics">
          <div>
            <strong>80%</strong>
            <span>LESS MANUAL DEPLOYMENT EFFORT</span>
          </div>

          <div>
            <strong>08</strong>
            <span>ENGINEERING PIPELINE STAGES</span>
          </div>

          <div>
            <strong>HPA</strong>
            <span>KUBERNETES AUTOSCALING</span>
          </div>
        </div>

        <div className="project-panel-tabs">
          {projectPanels.map((panel) => (
            <button
              type="button"
              key={panel.id}
              className={
                activePanel === panel.id
                  ? "project-panel-tab project-panel-tab--active"
                  : "project-panel-tab"
              }
              onClick={() => setActivePanel(panel.id)}
            >
              {panel.label}
            </button>
          ))}
        </div>

        {activePanel === "overview" && (
          <div className="project-panel project-overview-panel">
            <div className="project-overview-grid">
              <div>
                <span className="project-panel-kicker">
                  APPLICATION
                </span>

                <h4>Python / Flask</h4>

                <p>
                  Banking portal covering registration, login, fund
                  transfer and transaction history with SQLite-backed
                  application data.
                </p>
              </div>

              <div>
                <span className="project-panel-kicker">
                  DELIVERY
                </span>

                <h4>Automated CI/CD</h4>

                <p>
                  GitHub Actions automates build, quality checks,
                  security validation and container delivery.
                </p>
              </div>

              <div>
                <span className="project-panel-kicker">
                  PLATFORM
                </span>

                <h4>Kubernetes / GitOps</h4>

                <p>
                  Dockerized workloads run on Kubernetes with HPA,
                  while Argo CD keeps deployment state synchronized
                  with Git.
                </p>
              </div>
            </div>
          </div>
        )}

        {activePanel === "pipeline" && (
          <div className="project-panel">
            <div className="project-pipeline-grid">
              {pipelineSteps.map(
                (
                  {
                    number,
                    title,
                    tool,
                    icon: Icon,
                  },
                  index,
                ) => (
                  <button
                    type="button"
                    key={number}
                    className={[
                      "interactive-pipeline-step",
                      activePipelineStep === index
                        ? "interactive-pipeline-step--active"
                        : "",
                      index < activePipelineStep
                        ? "interactive-pipeline-step--complete"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setActivePipelineStep(index)}
                  >
                    <div className="interactive-pipeline-icon">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <span>{number}</span>

                    <h4>{title}</h4>

                    <p>{tool}</p>
                  </button>
                ),
              )}
            </div>

            <div className="pipeline-inspection">
              <div className="pipeline-inspection-icon">
                <selectedStep.icon size={19} />
              </div>

              <div>
                <span>
                  STAGE {selectedStep.number} — INSPECTION
                </span>

                <h4>{selectedStep.title}</h4>

                <p>{selectedStep.detail}</p>
              </div>
            </div>
          </div>
        )}

        {activePanel === "security" && (
          <div className="project-panel">
            <div className="project-detail-header">
              <LockKeyhole size={20} />

              <div>
                <span>SHIFT-LEFT SECURITY</span>
                <h4>Security controls across the delivery path.</h4>
              </div>
            </div>

            <div className="project-detail-tags">
              {securityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="project-detail-copy">
              The documented project integrates static analysis,
              dependency vulnerability scanning, container image
              scanning and dynamic application security testing into
              the CI/CD workflow before deployment.
            </p>
          </div>
        )}

        {activePanel === "observability" && (
          <div className="project-panel">
            <div className="project-detail-header">
              <Activity size={20} />

              <div>
                <span>CONTINUOUS OBSERVABILITY</span>
                <h4>Metrics across the Kubernetes platform.</h4>
              </div>
            </div>

            <div className="project-detail-tags">
              {observabilityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="project-detail-copy">
              Prometheus and Grafana provide real-time visibility into
              cluster health, node metrics, CPU usage, memory usage,
              pod status and Kubernetes resources.
            </p>
          </div>
        )}

        <div className="interactive-project-footer">
          <div className="project-tech">
            {[
              "Python",
              "Flask",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "SonarQube",
              "Trivy",
              "Argo CD",
              "Prometheus",
              "Grafana",
            ].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;