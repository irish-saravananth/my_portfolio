import { useMemo, useState } from "react";
import {
  Activity,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Layers3,
  Search,
  Server,
  ShieldCheck,
} from "lucide-react";
import "./Skills.css";

const primaryGroups = [
  {
    category: "CLOUD",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Cloud platforms, networking and infrastructure services",
    skills: [
      "Azure",
      "AWS",
      "Azure Networking",
      "IAM",
      "EC2",
      "S3",
      "VPC",
      "Azure Monitor",
    ],
  },
  {
    category: "DELIVERY",
    icon: GitBranch,
    title: "CI/CD & Source Control",
    description: "Automated software delivery and version control",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "PLATFORM",
    icon: Container,
    title: "Containers & Kubernetes",
    description: "Containerized workloads and cloud-native platforms",
    skills: [
      "Docker",
      "Kubernetes",
      "Kind",
      "kubectl",
      "Helm",
      "AKS",
      "HPA",
    ],
  },
  {
    category: "AUTOMATION",
    icon: Layers3,
    title: "Infrastructure as Code",
    description: "Repeatable infrastructure and configuration automation",
    skills: [
      "Terraform",
      "Ansible",
      "YAML",
      "Infrastructure Automation",
      "Configuration Management",
      "Linux",
    ],
  },
  {
    category: "SECURITY",
    icon: ShieldCheck,
    title: "DevSecOps & Security",
    description: "Security and quality controls integrated into delivery",
    skills: [
      "SonarQube",
      "Semgrep",
      "Trivy",
      "SAST",
      "SCA",
      "DAST",
    ],
  },
  {
    category: "OBSERVABILITY",
    icon: Activity,
    title: "Observability",
    description: "Monitoring, metrics and operational visibility",
    skills: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Azure Monitor",
      "Log Analytics",
      "Monitoring",
    ],
  },
  {
    category: "AUTOMATION",
    icon: Code2,
    title: "Scripting & Automation",
    description: "Automation across infrastructure and delivery workflows",
    skills: [
      "Python",
      "Bash",
      "PowerShell",
      "Shell Scripting",
      "YAML Automation",
      "Linux",
    ],
  },
  {
    category: "PLATFORM",
    icon: Server,
    title: "GitOps & Platform Engineering",
    description: "Application deployment and platform operations",
    skills: [
      "Argo CD",
      "GitOps",
      "Helm",
      "Application Deployment",
      "Troubleshooting",
      "Performance Tuning",
    ],
  },
];

const securityGroups = [
  {
    icon: ShieldCheck,
    title: "Microsoft Sentinel Engineering",
    description:
      "SIEM engineering across Microsoft Sentinel with telemetry integration and detection workflows.",
    skills: [
      "Microsoft Sentinel",
      "KQL",
      "Analytical Rules",
      "Log Analytics",
      "Data Connectors",
      "Log Normalization",
    ],
  },
  {
    icon: Cloud,
    title: "Defender XDR Integration",
    description:
      "Security telemetry integration across Microsoft Defender XDR and Sentinel.",
    skills: [
      "Microsoft Defender XDR",
      "Defender for Endpoint",
      "Defender for Identity",
      "Defender for Office 365",
      "Sentinel Integration",
      "Security Telemetry",
    ],
  },
  {
    icon: Server,
    title: "Wazuh SOC Engineering",
    description:
      "SOC platform setup, agent integration, log collection and analytical rule engineering.",
    skills: [
      "Wazuh",
      "SIEM Deployment",
      "Agent Integration",
      "Log Collection",
      "Log Parsing",
      "Analytical Rules",
    ],
  },
  {
    icon: Search,
    title: "Detection Engineering & Threat Hunting",
    description:
      "Detection development and tuning driven by threat intelligence and hunting requirements.",
    skills: [
      "Detection Engineering",
      "Threat Hunting",
      "Threat Intelligence",
      "Analytical Rule Tuning",
      "False Positive Reduction",
      "MITRE ATT&CK",
    ],
  },
  {
    icon: Activity,
    title: "Security Automation & Response",
    description:
      "Investigation workflows and automated response for known security alerts and actions.",
    skills: [
      "Security Automation",
      "Automated Response",
      "Known Alert Actions",
      "Incident Response",
      "Security Event Analysis",
      "Investigation Workflows",
    ],
  },
];

const filters = [
  "ALL",
  "CLOUD",
  "DELIVERY",
  "PLATFORM",
  "SECURITY",
  "OBSERVABILITY",
  "AUTOMATION",
];

function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
  category,
  isSelected,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={[
        "interactive-skill-card",
        isSelected ? "interactive-skill-card--selected" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <div className="interactive-skill-card-top">
        <div className="interactive-skill-icon">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <span className="interactive-skill-count">
          {String(skills.length).padStart(2, "0")}
        </span>
      </div>

      <div className="interactive-skill-meta">
        <span>{category}</span>
        <span>CAPABILITY</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="interactive-skill-tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="interactive-skill-footer">
        <span>{isSelected ? "SELECTED" : "INSPECT"}</span>
        <span className="interactive-skill-arrow">↗</span>
      </div>
    </button>
  );
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredGroups = useMemo(() => {
    if (activeFilter === "ALL") {
      return primaryGroups;
    }

    return primaryGroups.filter(
      (group) => group.category === activeFilter,
    );
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSelectedCard(null);
  };

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="section-kicker">TECHNOLOGY STACK</p>

          <h2>The tools behind the delivery.</h2>
        </div>
      </div>

      <p className="skills-intro">
        A DevOps-focused engineering stack spanning cloud infrastructure,
        CI/CD, Kubernetes, infrastructure as code, DevSecOps and
        observability.
      </p>

      <div className="interactive-stack-header">
        <div className="stack-label">
          <span className="stack-line" />
          PRIMARY — DEVOPS / DEVSECOPS
        </div>

        <span className="interactive-stack-count">
          {String(filteredGroups.length).padStart(2, "0")} CAPABILITIES
        </span>
      </div>

      <div className="skill-filter-bar" aria-label="Technology filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={
              activeFilter === filter
                ? "skill-filter skill-filter--active"
                : "skill-filter"
            }
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="interactive-skills-grid">
        {filteredGroups.map((group) => (
          <SkillCard
            key={group.title}
            {...group}
            isSelected={selectedCard === group.title}
            onSelect={() =>
              setSelectedCard((current) =>
                current === group.title ? null : group.title,
              )
            }
          />
        ))}
      </div>

      <div className="skills-selection-status" aria-live="polite">
        <span className="skills-selection-dot" />

        <span>
          {selectedCard
            ? `INSPECTING — ${selectedCard.toUpperCase()}`
            : "SELECT A CAPABILITY TO INSPECT"}
        </span>
      </div>

      <div className="secondary-security">
        <div className="secondary-heading">
          <div>
            <p className="section-kicker">SECONDARY EXPERIENCE</p>

            <h3>Security Operations &amp; SOC</h3>
          </div>

          <span className="secondary-label">
            SECURITY BACKGROUND
          </span>
        </div>

        <p className="secondary-description">
          Security operations experience that complements my DevOps
          and DevSecOps engineering background, with experience across
          SIEM platforms, endpoint security, log engineering, incident
          response, threat detection and security automation workflows.
        </p>

        <div className="secondary-security-grid">
          {securityGroups.map(
            ({
              icon: Icon,
              title,
              description,
              skills,
            }) => (
              <article
                className="secondary-security-card"
                key={title}
              >
                <div className="secondary-security-icon">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <span className="secondary-security-count">
                  {String(skills.length).padStart(2, "0")}
                </span>

                <h4>{title}</h4>

                <p>{description}</p>

                <div className="secondary-security-tags">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;