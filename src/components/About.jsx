function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div>
          <p className="section-kicker">ABOUT ME</p>
        </div>

        <div className="about-copy">
          <h2>
            Engineering the path
            <br />
            from code to production.
          </h2>

          <p>
            DevOps and DevSecOps engineer focused on building automated,
            secure and reliable software delivery platforms across cloud-native
            environments.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span>01</span>

              <div>
                <h3>Automated delivery</h3>

                <p>
                  Designing CI/CD workflows that automate build, validation,
                  security checks and application deployment.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>02</span>

              <div>
                <h3>Infrastructure automation</h3>

                <p>
                  Using Infrastructure as Code and configuration automation to
                  create repeatable and consistent environments.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>03</span>

              <div>
                <h3>Cloud-native operations</h3>

                <p>
                  Working with containers, Kubernetes and cloud platforms to
                  support scalable application deployment and reliable
                  operations.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>04</span>

              <div>
                <h3>Secure software delivery</h3>

                <p>
                  Integrating security and code-quality controls into delivery
                  pipelines to identify vulnerabilities earlier in the
                  development lifecycle.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>05</span>

              <div>
                <h3>DevOps platform engineering</h3>

                <p>
                  Building and maintaining reliable engineering workflows
                  across source control, CI/CD, containers, Kubernetes,
                  GitOps, cloud platforms and observability.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>06</span>

              <div>
                <h3>SOC &amp; detection engineering</h3>

                <p>
                  Engineering SOC capabilities across Microsoft Sentinel,
                  Defender XDR and Wazuh, including log normalization and
                  parsing, third-party data connectors, analytical rule
                  development and tuning, false-positive reduction, threat
                  hunting, threat intelligence-driven detections and automated
                  response for known alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;