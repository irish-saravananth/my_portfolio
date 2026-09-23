import {
  GitBranch,
  Cloud,
  Container,
  ShieldCheck,
  Activity,
} from "lucide-react";

const experienceAreas = [
  {
    icon: GitBranch,
    title: "DELIVERY AUTOMATION",
    description:
      "Building automated and repeatable software delivery workflows using CI/CD pipelines, source control and deployment automation.",
    technologies: "GitHub Actions · Azure DevOps · Jenkins · Git",
  },
  {
    icon: Cloud,
    title: "CLOUD & INFRASTRUCTURE",
    description:
      "Working with cloud platforms and Infrastructure as Code to provision, configure and manage consistent environments.",
    technologies: "Azure · AWS · Terraform · Ansible",
  },
  {
    icon: Container,
    title: "CONTAINERS & KUBERNETES",
    description:
      "Containerizing applications and deploying workloads on Kubernetes-based environments with repeatable configuration and orchestration.",
    technologies: "Docker · Kubernetes · Helm · AKS · Kind",
  },
  {
    icon: ShieldCheck,
    title: "DEVSECOPS & SECURE DELIVERY",
    description:
      "Integrating security and code-quality controls into software delivery workflows to identify vulnerabilities throughout the development lifecycle.",
    technologies: "SAST · SCA · DAST · SonarQube · Trivy · Semgrep",
  },
  {
    icon: Activity,
    title: "OBSERVABILITY & RELIABILITY",
    description:
      "Building monitoring and visibility into applications and infrastructure to support troubleshooting, performance analysis and reliable operations.",
    technologies: "Prometheus · Grafana · Alertmanager",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <div>
          <p className="section-kicker">EXPERIENCE</p>

          <h2>
            Engineering reliable delivery
            <br />
            from infrastructure to production.
          </h2>
        </div>
      </div>

      <p className="experience-intro">
        DevOps and DevSecOps engineering focused on automation, cloud
        infrastructure, containerization, secure software delivery and
        observability.
      </p>

      <div className="experience-grid">
        {experienceAreas.map(
          ({ icon: Icon, title, description, technologies }) => (
            <article className="experience-card" key={title}>
              <div className="experience-icon">
                <Icon size={19} />
              </div>

              <div className="experience-card-content">
                <h3>{title}</h3>

                <p>{description}</p>

                <span>{technologies}</span>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Experience;