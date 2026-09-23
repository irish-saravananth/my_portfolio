import {
  Activity,
  Boxes,
  Cloud,
  GitBranch,
  Hammer,
  ShieldCheck,
} from "lucide-react";

const workflowSteps = [
  {
    icon: GitBranch,
    number: "01",
    title: "SOURCE",
    text: "Git · GitHub",
  },
  {
    icon: Hammer,
    number: "02",
    title: "BUILD",
    text: "Jenkins · GitHub Actions · Azure DevOps",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "SECURE",
    text: "SAST · SCA · DAST",
  },
  {
    icon: Boxes,
    number: "04",
    title: "CONTAINERIZE",
    text: "Docker · Trivy",
  },
  {
    icon: Boxes,
    number: "05",
    title: "ORCHESTRATE",
    text: "Kubernetes · Helm",
  },
  {
    icon: GitBranch,
    number: "06",
    title: "GITOPS",
    text: "Argo CD",
  },
  {
    icon: Cloud,
    number: "07",
    title: "DEPLOY",
    text: "Azure · AWS",
  },
  {
    icon: Activity,
    number: "08",
    title: "OBSERVE",
    text: "Prometheus · Grafana",
  },
];

function DevOpsFlow() {
  return (
    <section className="flow-section" id="workflow">
      <div className="flow-heading">
        <p className="section-kicker">ENGINEERING WORKFLOW</p>

        <h2>
          From commit to
          <br />
          continuous
          <br />
          observability.
        </h2>
      </div>

      <p className="flow-description">
        A DevOps lifecycle designed around automation, secure delivery,
        infrastructure as code, cloud-native deployment and observability.
      </p>

      <div className="flow-grid">
        {workflowSteps.map(
          ({ icon: Icon, number, title, text }) => (
            <article className="flow-card" key={number}>
              <div className="flow-icon">
                <Icon size={21} />
              </div>

              <span className="flow-number">{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default DevOpsFlow;