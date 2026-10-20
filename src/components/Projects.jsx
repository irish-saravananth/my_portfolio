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
  ExternalLink,
  FileText,
  Network,
  CheckCircle2,
  Info,
} from "lucide-react";
import "./Projects.css";

const repositoryUrl =
  "https://github.com/irish-saravananth/secure-banking-transaction-portal";

const architectureUrl =
  "https://github.com/user-attachments/assets/3ccc46cd-78e6-401d-b22a-79b2d91f5cbb";

const projectPanels = [
  { id: "overview", label: "OVERVIEW" },
  { id: "pipeline", label: "PIPELINE" },
  { id: "security", label: "SECURITY" },
  { id: "observability", label: "OBSERVABILITY" },
];

const pipelineSteps = [
  {
    number: "01",
    title: "SOURCE",
    tool: "Git · GitHub",
    icon: GitBranch,
    status: "SOURCE CONTROL",
    detail:
      "Application code and deployment manifests are maintained in a Git repository. The CI workflows are configured for pushes and pull requests targeting main.",
  },
  {
    number: "02",
    title: "VALIDATE",
    tool: "GitHub Actions · Pytest",
    icon: Workflow,
    status: "WORKFLOW CONFIGURED",
    detail:
      "The security-validation workflow checks Python syntax and runs security regression tests. The separate CI workflow also performs syntax validation and security checks.",
  },
  {
    number: "03",
    title: "SECURE",
    tool: "Bandit · Semgrep · Snyk · SonarQube · Trivy",
    icon: ShieldCheck,
    status: "SCANNING CONFIGURATION",
    detail:
      "Workflow files configure Bandit, Semgrep, SonarQube, Snyk, and Trivy checks. ZAP scan reports are also present in the project evidence. Actual results depend on the individual scan runs and required secrets.",
  },
  {
    number: "04",
    title: "CONTAINER",
    tool: "Docker",
    icon: Container,
    status: "BUILD CONFIGURED",
    detail:
      "The security-validation workflow builds a Docker image for validation. The GHCR workflow separately builds release image tags on pushes to main.",
  },
  {
    number: "05",
    title: "REGISTRY",
    tool: "GitHub Container Registry",
    icon: PackageCheck,
    status: "PUBLISH WORKFLOW CONFIGURED",
    detail:
      "The GHCR workflow publishes the image with latest and the Git commit SHA tags. The Kubernetes Deployment currently references an AWS ECR image, so these configurations are not yet a single demonstrated release path.",
  },
  {
    number: "06",
    title: "KUBERNETES",
    tool: "Deployment · Service · HPA",
    icon: Boxes,
    status: "MANIFESTS AVAILABLE",
    detail:
      "The repository includes Deployment, Service, and HorizontalPodAutoscaler manifests. The Deployment specifies two replicas, while the HPA configuration sets a range of two to five replicas and a CPU utilization target of 50%.",
  },
  {
    number: "07",
    title: "GITOPS",
    tool: "Argo CD",
    icon: Cloud,
    status: "APPLICATION CONFIGURED",
    detail:
      "An Argo CD Application manifest points to the repository's k8s directory and specifies automated sync, pruning, and self-healing. The manifest alone does not prove a live sync completed.",
  },
  {
    number: "08",
    title: "OBSERVE",
    tool: "Prometheus · Grafana",
    icon: Activity,
    status: "DOCUMENTED SETUP",
    detail:
      "The monitoring README documents the kube-prometheus-stack, Prometheus, Grafana, Alertmanager, Node Exporter, and kube-state-metrics. Treat these as documented setup components unless a running environment has been verified.",
  },
];

const securityItems = [
  "Bandit — Python SAST",
  "Semgrep — static analysis",
  "SonarQube — code quality",
  "Snyk — dependency testing",
  "Trivy — filesystem scan",
  "Trivy — image scan",
  "Pytest — security regression tests",
  "OWASP ZAP — scan evidence",
];

const observabilityItems = [
  "Prometheus",
  "Grafana",
  "Alertmanager",
  "Node Exporter",
  "kube-state-metrics",
  "CPU and memory queries",
  "Pod and deployment metrics",
  "Helm installation documented",
];

const technologies = [
  "Python",
  "Flask",
  "SQLite",
  "GitHub Actions",
  "Docker",
  "GHCR",
  "Kubernetes",
  "HPA",
  "Argo CD",
  "Bandit",
  "Semgrep",
  "Trivy",
  "Prometheus",
  "Grafana",
];

function Projects() {
  const [activePanel, setActivePanel] = useState("overview");
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  const selectedStep = pipelineSteps[activePipelineStep];
  const SelectedStepIcon = selectedStep.icon;

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-kicker">PROJECTS</p>
          <h2>Engineering work, built end to end.</h2>
          <p className="section-description">
            A practical look at application delivery, security validation,
            infrastructure configuration, and operational visibility.
          </p>
        </div>
      </div>

      <article className="interactive-project">
        <div className="interactive-project-header">
          <div>
            <p className="project-eyebrow">
              FEATURED PROJECT · DEVSECOPS
            </p>

            <h3>Secure Banking Transaction Portal</h3>

            <p className="project-subtitle">
              APPLICATION SECURITY · CI/CD · CONTAINERS · KUBERNETES · GITOPS
            </p>
          </div>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="interactive-project-github"
          >
            <Code2 size={17} />
            View repository
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="interactive-project-description">
          A Python and Flask banking application used to explore a
          DevSecOps delivery workflow. The application includes registration,
          login, fund transfers, and transaction history backed by SQLite.
          The repository contains CI security checks, Docker image publishing,
          Kubernetes manifests, an Argo CD Application manifest, and
          monitoring setup documentation.
        </p>

        <div className="sprint6-project-links">
          <a
            href={`${repositoryUrl}#readme`}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={16} />
            <span>
              <strong>Project README</strong>
              <small>Implementation and setup notes</small>
            </span>
            <ExternalLink size={14} />
          </a>

          <a
            href={architectureUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Network size={16} />
            <span>
              <strong>Architecture diagram</strong>
              <small>Open the project architecture image</small>
            </span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="interactive-project-metrics">
          <div>
            <strong>3</strong>
            <span>KUBERNETES RESOURCE TYPES</span>
          </div>

          <div>
            <strong>2–5</strong>
            <span>CONFIGURED HPA REPLICA RANGE</span>
          </div>

          <div>
            <strong>2</strong>
            <span>IMAGE TAGS PUBLISHED BY GHCR WORKFLOW</span>
          </div>
        </div>

        <div className="sprint6-evidence-note">
          <Info size={17} />
          <p>
            These figures describe repository configuration, not measured
            production performance. The documented pipeline stages span
            separate workflows and deployment configurations.
          </p>
        </div>

        <div className="project-panel-tabs" role="tablist" aria-label="Project details">
          {projectPanels.map((panel) => (
            <button
              type="button"
              role="tab"
              aria-selected={activePanel === panel.id}
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
          <div className="project-panel project-overview-panel" role="tabpanel">
            <div className="project-overview-grid">
              <div>
                <span className="project-panel-kicker">01 / APPLICATION</span>
                <h4>Python / Flask</h4>
                <p>
                  Registration, login, fund transfers, and transaction
                  history with SQLite-backed application data.
                </p>
              </div>

              <div>
                <span className="project-panel-kicker">02 / DELIVERY</span>
                <h4>Automated validation</h4>
                <p>
                  GitHub Actions workflow files configure syntax checks,
                  regression tests, static analysis, dependency checks,
                  and container validation.
                </p>
              </div>

              <div>
                <span className="project-panel-kicker">03 / PLATFORM</span>
                <h4>Kubernetes / GitOps</h4>
                <p>
                  Deployment, Service, HPA, and Argo CD manifests describe
                  the intended application delivery and scaling setup.
                </p>
              </div>
            </div>

            <div className="sprint6-implementation-grid">
              <div>
                <CheckCircle2 size={18} />
                <div>
                  <h4>Present in the repository</h4>
                  <p>
                    CI workflow definitions, Docker build and GHCR publishing
                    steps, Kubernetes manifests, Argo CD configuration,
                    and security scan reports.
                  </p>
                </div>
              </div>

              <div>
                <Info size={18} />
                <div>
                  <h4>Verify in the target environment</h4>
                  <p>
                    Successful scan runs, live Argo CD synchronization,
                    active autoscaling, and a running monitoring stack
                    require environment-level verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePanel === "pipeline" && (
          <div className="project-panel" role="tabpanel">
            <div className="sprint6-panel-intro">
              <h4>From source changes to operational visibility</h4>
              <p>
                Select a stage to inspect its configuration and evidence.
                This is an architecture view across project files, not a
                claim that every stage runs in one workflow.
              </p>
            </div>

            <div className="project-pipeline-grid">
              {pipelineSteps.map(({ number, title, tool, icon: Icon }, index) => (
                <button
                  type="button"
                  key={number}
                  aria-pressed={activePipelineStep === index}
                  className={[
                    "interactive-pipeline-step",
                    activePipelineStep === index
                      ? "interactive-pipeline-step--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActivePipelineStep(index)}
                >
                  <div className="interactive-pipeline-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span>{number}</span>
                  <h4>{title}</h4>
                  <p>{tool}</p>
                </button>
              ))}
            </div>

            <div className="pipeline-inspection" aria-live="polite">
              <div className="pipeline-inspection-icon">
                <SelectedStepIcon size={20} />
              </div>

              <div>
                <span>
                  STAGE {selectedStep.number} · {selectedStep.status}
                </span>
                <h4>{selectedStep.title}</h4>
                <p>{selectedStep.detail}</p>
              </div>
            </div>
          </div>
        )}

        {activePanel === "security" && (
          <div className="project-panel" role="tabpanel">
            <div className="project-detail-header">
              <LockKeyhole size={22} />

              <div>
                <span>SHIFT-LEFT SECURITY</span>
                <h4>Security checks with repository evidence</h4>
              </div>
            </div>

            <div className="project-detail-tags">
              {securityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="project-detail-copy">
              The CI workflow configures Bandit, SonarQube, and Snyk.
              The separate security-validation workflow runs regression
              tests, Bandit and Semgrep analysis, and Trivy filesystem and
              image scans. ZAP reports are present in the repository, but
              ZAP is not shown as a step in these two workflow files.
              Results and release-blocking behavior depend on the actual
              run outcome and workflow configuration.
            </p>

            <a
              className="sprint6-inline-link"
              href={`${repositoryUrl}/tree/main/evidence`}
              target="_blank"
              rel="noreferrer"
            >
              Browse security evidence <ExternalLink size={14} />
            </a>
          </div>
        )}

        {activePanel === "observability" && (
          <div className="project-panel" role="tabpanel">
            <div className="project-detail-header">
              <Activity size={22} />

              <div>
                <span>OBSERVABILITY</span>
                <h4>Monitoring stack and Kubernetes metrics</h4>
              </div>
            </div>

            <div className="project-detail-tags">
              {observabilityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="project-detail-copy">
              The monitoring README documents installation of the
              kube-prometheus-stack Helm chart and describes Prometheus,
              Grafana, Alertmanager, Node Exporter, and kube-state-metrics.
              It also includes example queries for target health, pod
              information, CPU, and memory. This describes the documented
              setup; a live monitoring environment has not been established
              by the files reviewed here.
            </p>

            <a
              className="sprint6-inline-link"
              href={`${repositoryUrl}/tree/main/monitoring`}
              target="_blank"
              rel="noreferrer"
            >
              Browse monitoring documentation <ExternalLink size={14} />
            </a>
          </div>
        )}

        <div className="interactive-project-footer">
          <div className="project-tech">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
