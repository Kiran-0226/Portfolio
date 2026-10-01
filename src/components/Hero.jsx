import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <main className="hero-page">

      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="hero-grid"></div>

      <div className="hero-scan-line"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="hero-container">

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <section className="hero-content">

          {/* System status */}

          <div className="hero-system-status">

            <span className="hero-status-dot"></span>

            <span className="hero-status-text">
              SYSTEM INITIALIZED
            </span>

          </div>


          {/* Intro */}

          <p className="hero-intro">
            Hello, I'm
          </p>


          {/* Name */}

          <h1 className="hero-name">
            KIRAN GOWDA D
            <span className="hero-name-dot">.</span>
          </h1>


          {/* Role */}

          <div className="hero-role">

            <span className="hero-role-primary">
              Cybersecurity Enthusiast
            </span>

            <span className="hero-role-divider">
              /
            </span>

            <span className="hero-role-secondary">
              Full-Stack Developer
            </span>

          </div>


          {/* Description */}

          <p className="hero-description">
            I build modern web applications while exploring
            cybersecurity, ethical hacking, web security,
            networking, and secure software development.
          </p>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="hero-actions">

            <Link
              to="/projects"
              className="hero-button hero-button-primary"
            >
              <span>View Projects</span>

              <span className="hero-button-arrow">
                →
              </span>
            </Link>


            <Link
              to="/resume"
              className="hero-button hero-button-resume"
            >
              <span>View Resume</span>

              <span className="hero-button-arrow">
                ↗
              </span>
            </Link>


            <Link
              to="/contact"
              className="hero-button hero-button-secondary"
            >
              Contact Me
            </Link>

          </div>


          {/* =================================================
              SOCIALS
          ================================================= */}

          <div className="hero-socials">

            <a
              href="https://github.com/Kiran-0226"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <span className="hero-social-icon">
                &lt;/&gt;
              </span>

              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/kiran-gowda-d-57114b329"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <span className="hero-social-icon">
                in
              </span>

              LinkedIn
            </a>

          </div>


          {/* =================================================
              INFORMATION
          ================================================= */}

          <div className="hero-info">

            <div className="hero-info-item">

              <span className="hero-info-label">
                FOCUS
              </span>

              <span className="hero-info-value">
                Cybersecurity
              </span>

            </div>


            <div className="hero-info-item">

              <span className="hero-info-label">
                STACK
              </span>

              <span className="hero-info-value">
                Full-Stack
              </span>

            </div>


            <div className="hero-info-item">

              <span className="hero-info-label">
                STATUS
              </span>

              <span className="hero-info-value hero-info-online">

                <span className="hero-mini-dot"></span>

                Building

              </span>

            </div>

          </div>

        </section>


        {/* ===================================================
            TERMINAL
        =================================================== */}

        <section className="hero-terminal">

          {/* Terminal header */}

          <div className="hero-terminal-header">

            <div className="hero-terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span className="hero-terminal-title">
              kiran@portfolio:~
            </span>

            <span className="hero-terminal-live">
              LIVE
            </span>

          </div>


          {/* Terminal body */}

          <div className="hero-terminal-body">

            {/* Command */}

            <div className="terminal-command terminal-command-first">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                whoami
              </span>

            </div>


            {/* Output */}

            <div className="terminal-output terminal-output-name">
              kiran_gowda_d
            </div>


            {/* Command */}

            <div className="terminal-command terminal-command-gap">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                cat role.txt
              </span>

            </div>


            {/* Output */}

            <div className="terminal-output">
              Cybersecurity Enthusiast
            </div>

            <div className="terminal-output">
              Full-Stack Developer
            </div>


            {/* Command */}

            <div className="terminal-command terminal-command-gap">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                cat focus.txt
              </span>

            </div>


            {/* Focus output */}

            <div className="terminal-output terminal-focus-output">

              <span>
                Web Security
              </span>

              <span>
                Ethical Hacking
              </span>

              <span>
                Secure Development
              </span>

            </div>


            {/* Command */}

            <div className="terminal-command terminal-command-gap">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                system --status
              </span>

            </div>


            {/* Status box */}

            <div className="terminal-status-box">

              <div className="terminal-status-row">

                <span>
                  user
                </span>

                <strong>
                  KIRAN GOWDA D
                </strong>

              </div>


              <div className="terminal-status-row">

                <span>
                  environment
                </span>

                <strong>
                  development
                </strong>

              </div>


              <div className="terminal-status-row">

                <span>
                  security
                </span>

                <strong>
                  learning
                </strong>

              </div>


              <div className="terminal-status-row">

                <span>
                  projects
                </span>

                <strong>
                  active
                </strong>

              </div>


              <div className="terminal-status-row">

                <span>
                  status
                </span>

                <strong className="terminal-online">
                  ● online
                </strong>

              </div>

            </div>


            {/* Final command */}

            <div className="terminal-command terminal-final-command">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                ./build-future.sh
              </span>

              <span className="terminal-cursor">
                _
              </span>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          BOTTOM SYSTEM LINE
      ===================================================== */}

      <div className="hero-bottom-line">

        <span></span>

        <span>
          01 / HOME
        </span>

        <span></span>

      </div>

    </main>
  );
}

export default Hero;