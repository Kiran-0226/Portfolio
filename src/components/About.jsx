import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="about-grid-bg"></div>

      <div className="about-scan-line"></div>

      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="about-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="about-header">

          <div className="about-system">

            <span className="about-dot"></span>

            <span>
              PROFILE / ABOUT
            </span>

          </div>


          <p className="about-command">
            <span>$</span>
            <span>cat about.txt</span>
          </p>


          <h1>
            Getting to know
            <span> Kiran.</span>
          </h1>


          <p className="about-intro">
            I'm a Computer Engineering student interested in
            cybersecurity, ethical hacking, and full-stack
            web development. I enjoy building things, breaking
            things in controlled environments, and understanding
            how systems work underneath the surface.
          </p>

        </div>


        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className="about-grid">


          {/* =================================================
              PROFILE
          ================================================= */}

          <section className="about-story">

            <div className="section-label">

              <span>
                01
              </span>

              PROFILE

            </div>


            <h2>
              Building with code.
              <br />
              <span>
                Thinking like an attacker.
              </span>
            </h2>


            <p>
              My main interests sit at the intersection of
              software development and cybersecurity.
            </p>


            <p>
              On the development side, I work with modern
              web technologies and enjoy creating responsive,
              practical applications.
            </p>


            <p>
              On the security side, I'm exploring ethical
              hacking, web application security, Linux,
              networking, and offensive security concepts.
            </p>


            <p>
              My long-term goal is to become a strong
              cybersecurity professional while continuing
              to build real-world software.
            </p>


            {/* =================================================
                INTEREST MODULES
            ================================================= */}

            <div className="interest-list">


              {/* Cybersecurity */}

              <div className="interest-card">

                <div className="interest-scan"></div>

                <span className="interest-icon">
                  &gt;_
                </span>

                <div className="interest-content">

                  <strong>
                    Cybersecurity
                  </strong>

                  <small>
                    Ethical Hacking · Web Security
                  </small>

                </div>

                <span className="interest-status">
                  ACTIVE
                </span>

              </div>


              {/* Full Stack */}

              <div className="interest-card">

                <div className="interest-scan"></div>

                <span className="interest-icon">
                  &lt;/&gt;
                </span>

                <div className="interest-content">

                  <strong>
                    Full-Stack Development
                  </strong>

                  <small>
                    React · Node.js · MongoDB
                  </small>

                </div>

                <span className="interest-status">
                  ACTIVE
                </span>

              </div>


              {/* Problem Solving */}

              <div className="interest-card">

                <div className="interest-scan"></div>

                <span className="interest-icon">
                  &lt; / &gt;
                </span>

                <div className="interest-content">

                  <strong>
                    Problem Solving
                  </strong>

                  <small>
                    DSA · Programming · Systems
                  </small>

                </div>

                <span className="interest-status">
                  ACTIVE
                </span>

              </div>

            </div>

          </section>


          {/* =================================================
              TERMINAL
          ================================================= */}

          <section className="about-terminal">


            {/* Terminal Header */}

            <div className="about-terminal-header">

              <div className="terminal-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>


              <span className="about-terminal-title">
                profile@kiran
              </span>


              <span className="about-terminal-live">
                SECURE
              </span>

            </div>


            {/* Terminal Body */}

            <div className="about-terminal-body">


              {/* whoami */}

              <div className="terminal-line about-terminal-line-1">

                <span>$</span>

                whoami

              </div>


              <div className="terminal-output about-output-1">
                kiran_gowda_d
              </div>


              {/* Education */}

              <div className="terminal-line about-terminal-line-2">

                <span>$</span>

                education

              </div>


              <div className="terminal-output about-output-2">

                <strong>
                  B.E. Computer Engineering
                </strong>

                <small>
                  Sri Sairam College of Engineering
                </small>

              </div>


              {/* Interests */}

              <div className="terminal-line about-terminal-line-3">

                <span>$</span>

                interests

              </div>


              <div className="terminal-tags">

                <span>
                  CYBERSECURITY
                </span>

                <span>
                  ETHICAL_HACKING
                </span>

                <span>
                  FULL_STACK
                </span>

                <span>
                  WEB_SECURITY
                </span>

              </div>


              {/* Current Focus */}

              <div className="terminal-line about-terminal-line-4">

                <span>$</span>

                current_focus

              </div>


              <div className="terminal-output about-output-3">

                <strong>
                  Learning &amp; Building
                </strong>

                <small>
                  Security + Software
                </small>

              </div>


              {/* Status */}

              <div className="terminal-line about-terminal-line-5">

                <span>$</span>

                status

              </div>


              <div className="terminal-status-line">

                <span className="status-indicator"></span>

                ONLINE / LEARNING

              </div>


              {/* Final command */}

              <div className="terminal-final">

                <span>
                  $
                </span>

                <span className="terminal-cursor">
                  _
                </span>

              </div>

            </div>

          </section>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SYSTEM LINE
      ===================================================== */}

      <div className="about-bottom-line">

        <span></span>

        <span>
          02 / ABOUT
        </span>

        <span></span>

      </div>

    </main>
  );
}

export default About;