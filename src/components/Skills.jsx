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
  Workflow,
} from "lucide-react";

const primaryGroups = [
  {
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

const socGroups = [
  {
    icon: ShieldCheck,
    title: "Microsoft Sentinel Engineering",
    description:
      "SIEM engineering, detection development and security telemetry onboarding",
    skills: [
      "Microsoft Sentinel",
      "KQL",
      "Analytics Rules",
      "Data Connectors",
      "Log Normalization",
      "Log Parsing",
    ],
  },
  {
    icon: Cloud,
    title: "Defender XDR Integration",
    description:
      "Integrating Microsoft Defender security telemetry and capabilities with Sentinel",
    skills: [
      "Microsoft Defender XDR",
      "Defender Suite",
      "Sentinel Integration",
      "Security Telemetry",
      "Alert Correlation",
      "Data Connectors",
    ],
  },
  {
    icon: Server,
    title: "Wazuh SOC Engineering",
    description:
      "Building and configuring Wazuh environments for centralized security monitoring",
    skills: [
      "Wazuh",
      "SOC Setup",
      "Agent Deployment",
      "Log Collection",
      "Log Parsing",
      "Custom Detection Rules",
    ],
  },
  {
    icon: Search,
    title: "Detection Engineering & Threat Hunting",
    description:
      "Developing and tuning detections using requirements, threat intelligence and hunting findings",
    skills: [
      "Detection Engineering",
      "Rule Tuning",
      "False-Positive Reduction",
      "Threat Hunting",
      "Threat Intelligence",
      "MITRE ATT&CK",
    ],
  },
  {
    icon: Workflow,
    title: "Security Automation & Response",
    description:
      "Automating known alert response actions and reducing repetitive manual investigation",
    skills: [
      "Automated Response",
      "Known Alert Actions",
      "Alert Enrichment",
      "Response Workflows",
      "Security Automation",
      "Incident Response",
    ],
  },
];

function SkillCard({ icon: Icon, title, description, skills }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon">
          <Icon size={21} />
        </div>
      </div>

      <h3>{title}</h3>

      <p className="skill-description">{description}</p>

      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
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
        CI/CD, Kubernetes, infrastructure as code, DevSecOps and observability.
      </p>

      <div className="stack-label">
        <span className="stack-line" />
        PRIMARY — DEVOPS / DEVSECOPS
      </div>

      <div className="skills-grid">
        {primaryGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>

      <div className="stack-label secondary-stack-label">
        <span className="stack-line" />
        SECONDARY — SOC ENGINEERING
      </div>

      <p className="skills-intro secondary-skills-intro">
        Security operations engineering experience spanning SIEM implementation,
        detection engineering, log onboarding, threat hunting and automated
        response workflows.
      </p>

      <div className="skills-grid secondary-skills-grid">
        {socGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}

export default Skills;