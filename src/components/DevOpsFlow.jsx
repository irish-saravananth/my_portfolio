import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Boxes,
  Cloud,
  GitBranch,
  Hammer,
  ShieldCheck,
} from "lucide-react";
import "./DevOpsFlow.css";

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
  const sectionRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-8% 0px -18% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveStep((currentStep) =>
        currentStep === workflowSteps.length - 1
          ? 0
          : currentStep + 1,
      );
    }, 1400);

    return () => window.clearInterval(timer);
  }, [isInView, isPaused]);

  const handleStepFocus = (index) => {
    setActiveStep(index);
    setIsPaused(true);
  };

  const handleStepBlur = () => {
    setIsPaused(false);
  };

  const progressWidth =
    workflowSteps.length === 1
      ? 0
      : (activeStep / (workflowSteps.length - 1)) * 87.5;

  return (
    <section
      className="flow-section"
      id="workflow"
      ref={sectionRef}
    >
      <div className="flow-heading">
        <p className="section-kicker">ENGINEERING WORKFLOW</p>

        <div className="flow-heading-row">
          <h2>
            From commit to
            <br />
            continuous
            <br />
            observability.
          </h2>

          <div className="flow-status" aria-live="polite">
            <span className="flow-status-dot" />
            <span>PIPELINE {workflowSteps[activeStep].number}</span>
            <strong>{workflowSteps[activeStep].title}</strong>
          </div>
        </div>
      </div>

      <p className="flow-description">
        A DevOps lifecycle designed around automation, secure delivery,
        infrastructure as code, cloud-native deployment and observability.
      </p>

      <div className="flow-execution-bar">
        <div>
          <span className="flow-execution-label">
            PIPELINE EXECUTION
          </span>

          <span className="flow-execution-state">
            {isPaused
              ? "PAUSED — INSPECTING STAGE"
              : "RUNNING — AUTOMATED FLOW"}
          </span>
        </div>

        <span className="flow-execution-progress">
          {String(activeStep + 1).padStart(2, "0")} /{" "}
          {String(workflowSteps.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flow-track">
        <div className="flow-rail" aria-hidden="true" />

        <div
          className="flow-progress"
          style={{ width: `${progressWidth}%` }}
          aria-hidden="true"
        />

        <div className="flow-grid">
          {workflowSteps.map(
            ({ icon: Icon, number, title, text }, index) => {
              const isActive = index === activeStep;
              const isComplete = index < activeStep;

              const status = isActive
                ? "RUNNING"
                : isComplete
                  ? "PASSED"
                  : "QUEUED";

              return (
                <article
                  className={[
                    "flow-card",
                    isActive ? "flow-card--active" : "",
                    isComplete ? "flow-card--complete" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={number}
                  tabIndex={0}
                  aria-current={isActive ? "step" : undefined}
                  onMouseEnter={() => handleStepFocus(index)}
                  onMouseLeave={handleStepBlur}
                  onFocus={() => handleStepFocus(index)}
                  onBlur={handleStepBlur}
                >
                  <div className="flow-card-topline">
                    <div className="flow-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="flow-status-chip">
                      <span className="flow-status-chip-dot" />
                      {status}
                    </span>
                  </div>

                  <span className="flow-number">{number}</span>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

export default DevOpsFlow;