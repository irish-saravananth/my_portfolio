import { useMemo, useState } from "react";
import {
  Activity,
  Boxes,
  CircleCheck,
  GitBranch,
  Play,
  ShieldCheck,
  Terminal as TerminalIcon,
  Workflow,
} from "lucide-react";
import "./DevOpsTerminal.css";

const terminalCommands = [
  {
    id: "kubectl",
    label: "kubectl",
    command: "kubectl get pods -A",
    title: "KUBERNETES",
    icon: Boxes,
    status: "HEALTHY",
    output: [
      "NAMESPACE     NAME                         READY   STATUS",
      "banking       banking-portal-api          1/1     Running",
      "banking       banking-portal-worker       1/1     Running",
      "monitoring    prometheus                  1/1     Running",
      "monitoring    grafana                     1/1     Running",
      "",
      "✓ Kubernetes workloads healthy",
      "✓ HPA configured for application workloads",
    ],
  },
  {
    id: "terraform",
    label: "terraform",
    command: "terraform plan",
    title: "INFRASTRUCTURE AS CODE",
    icon: Workflow,
    status: "READY",
    output: [
      "Initializing infrastructure plan...",
      "",
      "Terraform will perform the following actions:",
      "",
      "  + infrastructure resources",
      "  + networking configuration",
      "  + cloud service configuration",
      "",
      "Plan: infrastructure changes validated",
      "✓ Infrastructure as Code workflow ready",
    ],
  },
  {
    id: "trivy",
    label: "trivy",
    command: "trivy image banking-portal:latest",
    title: "CONTAINER SECURITY",
    icon: ShieldCheck,
    status: "SCANNED",
    output: [
      "Scanning container image...",
      "",
      "Target: banking-portal:latest",
      "Scanner: Trivy",
      "Mode: vulnerability detection",
      "",
      "✓ Container image scan completed",
      "✓ Security gate evaluated",
    ],
  },
  {
    id: "argocd",
    label: "argocd",
    command: "argocd app get banking-portal",
    title: "GITOPS",
    icon: GitBranch,
    status: "SYNCED",
    output: [
      "Application: banking-portal",
      "Repository: Git",
      "",
      "Sync Status: Synced",
      "Health Status: Healthy",
      "Deployment: Kubernetes",
      "",
      "✓ Desired state synchronized",
      "✓ GitOps deployment healthy",
    ],
  },
  {
    id: "prometheus",
    label: "prometheus",
    command: "prometheus --query platform_health",
    title: "OBSERVABILITY",
    icon: Activity,
    status: "MONITORED",
    output: [
      "Querying platform metrics...",
      "",
      "application_up       1",
      "kubernetes_pods      2",
      "node_health           1",
      "memory_utilization   42%",
      "cpu_utilization      31%",
      "",
      "✓ Metrics available",
      "✓ Platform observability active",
    ],
  },
];

const platformStatus = [
  { label: "CI / CD", value: "OPERATIONAL" },
  { label: "SECURITY", value: "PASSING" },
  { label: "KUBERNETES", value: "HEALTHY" },
  { label: "GITOPS", value: "SYNCED" },
  { label: "MONITORING", value: "ACTIVE" },
];

function DevOpsTerminal() {
  const [activeCommand, setActiveCommand] = useState("kubectl");
  const [isRunning, setIsRunning] = useState(false);

  const selectedCommand = useMemo(
    () =>
      terminalCommands.find(
        (command) => command.id === activeCommand,
      ) ?? terminalCommands[0],
    [activeCommand],
  );

  const handleCommand = (commandId) => {
    setActiveCommand(commandId);
    setIsRunning(true);

    window.setTimeout(() => {
      setIsRunning(false);
    }, 650);
  };

  return (
    <section className="devops-terminal-section" id="terminal">
      <div className="devops-terminal-heading">
        <div>
          <p className="section-kicker">DEVOPS TERMINAL</p>

          <h2>
            Operate the
            <br />
            delivery platform.
          </h2>
        </div>

        <div className="terminal-live-badge">
          <span />
          INTERACTIVE SIMULATION
        </div>
      </div>

      <p className="devops-terminal-intro">
        Explore representative DevOps platform operations across
        Kubernetes, Infrastructure as Code, container security,
        GitOps and observability.
      </p>

      <div className="devops-console">
        <div className="devops-console-header">
          <div className="devops-console-window">
            <span />
            <span />
            <span />
          </div>

          <span className="devops-console-title">
            saravanan@devops-platform:~
          </span>

          <span className="devops-console-status">
            <CircleCheck size={12} />
            SYSTEM READY
          </span>
        </div>

        <div className="devops-console-body">
          <aside className="terminal-command-list">
            <div className="terminal-command-list-heading">
              <TerminalIcon size={12} />
              AVAILABLE COMMANDS
            </div>

            {terminalCommands.map((command) => {
              const CommandIcon = command.icon;

              return (
                <button
                  key={command.id}
                  type="button"
                  className={
                    activeCommand === command.id
                      ? "terminal-command-button terminal-command-button--active"
                      : "terminal-command-button"
                  }
                  onClick={() => handleCommand(command.id)}
                >
                  <CommandIcon size={16} />

                  <span>
                    <strong>{command.label}</strong>
                    <small>{command.command}</small>
                  </span>
                </button>
              );
            })}
          </aside>

          <div className="terminal-output-panel">
            <div className="terminal-output-top">
              <div>
                <span className="terminal-output-label">
                  CURRENT OPERATION
                </span>

                <strong>{selectedCommand.title}</strong>
              </div>

              <span className="terminal-operation-status">
                {isRunning ? "RUNNING" : selectedCommand.status}
              </span>
            </div>

            <div className="terminal-command-line">
              <span>$</span>
              <span>{selectedCommand.command}</span>

              {isRunning && (
                <span className="terminal-running">
                  executing...
                </span>
              )}
            </div>

            <div
              className={
                isRunning
                  ? "devops-terminal-output devops-terminal-output--running"
                  : "devops-terminal-output"
              }
            >
              {selectedCommand.output.map((line, index) => (
                <div
                  key={`${selectedCommand.id}-${index}`}
                  className={
                    line.startsWith("✓")
                      ? "terminal-output-line terminal-output-line--success"
                      : line.startsWith("Plan:")
                        ? "terminal-output-line terminal-output-line--accent"
                        : "terminal-output-line"
                  }
                >
                  {line || "\u00A0"}
                </div>
              ))}

              <div className="terminal-cursor-line">
                <span>$</span>
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>
        </div>

        <div className="devops-console-footer">
          <div className="console-footer-label">
            PLATFORM STATUS
          </div>

          <div className="platform-status-grid">
            {platformStatus.map((item) => (
              <div
                key={item.label}
                className="platform-status-item"
              >
                <span className="platform-status-indicator" />

                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="devops-terminal-caption">
        <Play size={11} />
        SELECT A COMMAND TO INSPECT A DELIVERY PLATFORM STATE
      </div>
    </section>
  );
}

export default DevOpsTerminal;