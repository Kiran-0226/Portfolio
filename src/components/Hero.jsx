import "./Hero.css";

function Hero() {
  return (
    <main className="hero">

      <div className="hero-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <section className="hero-content">

          {/* System Status */}
          <div className="hero-system">
            <span className="system-dot"></span>
            SYSTEM INITIALIZED
          </div>

          {/* Greeting */}
          <p className="hero-greeting">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="hero-name">
            KIRAN GOWDA D<span>.</span>
          </h1>

          {/* Role */}
          <h2 className="hero-title">
            Cybersecurity Enthusiast
            <br />
            <span>&amp; Full-Stack Developer</span>
          </h2>

          {/* Description */}
          <p className="hero-description">
            I build modern web applications and explore cybersecurity,
            ethical hacking, and secure software development.
          </p>

          {/* Buttons */}
          <div className="hero-actions">

            <a
              href="/projects"
              className="hero-button primary"
            >
              View Projects
              <span>→</span>
            </a>

            <a
              href="/contact"
              className="hero-button secondary"
            >
              Contact Me
            </a>

          </div>

          {/* Information */}
          <div className="hero-meta">

            <div className="meta-item">

              <span className="meta-label">
                FOCUS
              </span>

              <span className="meta-value">
                Cybersecurity
              </span>

            </div>

            <div className="meta-item">

              <span className="meta-label">
                STACK
              </span>

              <span className="meta-value">
                Full-Stack
              </span>

            </div>

            <div className="meta-item">

              <span className="meta-label">
                STATUS
              </span>

              <span className="meta-value active">
                ● Building
              </span>

            </div>

          </div>

        </section>


        {/* =========================
            RIGHT SIDE TERMINAL
        ========================== */}

        <section className="hero-terminal">

          {/* Terminal Header */}
          <div className="terminal-topbar">

            <div className="terminal-buttons">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="terminal-name">
              kiran@portfolio
            </div>

          </div>


          {/* Terminal Content */}
          <div className="terminal-content">

            {/* Command */}
            <div className="terminal-command">

              <span className="terminal-green">
                $
              </span>

              whoami

            </div>

            {/* Result */}
            <div className="terminal-result">
              kiran_gowda_d
            </div>


            {/* Command */}
            <div className="terminal-command">

              <span className="terminal-green">
                $
              </span>

              cat role.txt

            </div>

            {/* Result */}
            <div className="terminal-result">

              Cybersecurity Enthusiast
              <br />
              Full-Stack Developer

            </div>


            {/* Command */}
            <div className="terminal-command">

              <span className="terminal-green">
                $
              </span>

              system --status

            </div>


            {/* System Status */}
            <div className="terminal-status">

              <div>
                <span>
                  user
                </span>

                <strong>
                  KIRAN GOWDA D
                </strong>
              </div>


              <div>
                <span>
                  environment
                </span>

                <strong>
                  development
                </strong>
              </div>


              <div>
                <span>
                  security
                </span>

                <strong>
                  learning
                </strong>
              </div>


              <div>
                <span>
                  status
                </span>

                <strong className="online">
                  ● online
                </strong>
              </div>

            </div>


            {/* Final Command */}
            <div className="terminal-command last-command">

              <span className="terminal-green">
                $
              </span>

              ./build-future.sh

              <span className="terminal-cursor">
                _
              </span>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Hero;