import "./About.css";

function About() {
  return (
    <main className="about-page">

      <div className="about-container">

        {/* =========================
            PAGE HEADER
        ========================== */}

        <div className="about-header">

          <div className="about-system">
            <span className="about-dot"></span>
            PROFILE / ABOUT
          </div>

          <p className="about-command">
            <span>$</span> cat about.txt
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


        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="about-grid">

          {/* LEFT */}
          <section className="about-story">

            <div className="section-label">
              <span>01</span>
              PROFILE
            </div>

            <h2>
              Building with code.
              <br />
              <span>Thinking like an attacker.</span>
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


            {/* Interests */}

            <div className="interest-list">

              <div className="interest-card">
                <span className="interest-icon">
                  &gt;_
                </span>

                <div>
                  <strong>
                    Cybersecurity
                  </strong>

                  <small>
                    Ethical Hacking · Web Security
                  </small>
                </div>
              </div>


              <div className="interest-card">
                <span className="interest-icon">
                  &lt;/&gt;
                </span>

                <div>
                  <strong>
                    Full-Stack Development
                  </strong>

                  <small>
                    React · Node.js · MongoDB
                  </small>
                </div>
              </div>


              <div className="interest-card">
                <span className="interest-icon">
                  &lt; / &gt;
                </span>

                <div>
                  <strong>
                    Problem Solving
                  </strong>

                  <small>
                    DSA · Programming · Systems
                  </small>
                </div>
              </div>

            </div>

          </section>


          {/* RIGHT TERMINAL */}

          <section className="about-terminal">

            <div className="about-terminal-header">

              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                profile@kiran
              </span>

            </div>


            <div className="about-terminal-body">

              <div className="terminal-line">
                <span>$</span>
                whoami
              </div>

              <div className="terminal-output">
                kiran_gowda_d
              </div>


              <div className="terminal-line">
                <span>$</span>
                education
              </div>

              <div className="terminal-output">
                <strong>
                  B.E. Computer Engineering
                </strong>

                <small>
                  Sri Sairam College of Engineering
                </small>
              </div>


              <div className="terminal-line">
                <span>$</span>
                interests
              </div>

              <div className="terminal-tags">

                <span>CYBERSECURITY</span>
                <span>ETHICAL_HACKING</span>
                <span>FULL_STACK</span>
                <span>WEB_SECURITY</span>

              </div>


              <div className="terminal-line">
                <span>$</span>
                current_focus
              </div>

              <div className="terminal-output">
                <strong>
                  Learning & Building
                </strong>

                <small>
                  Security + Software
                </small>
              </div>


              <div className="terminal-line">
                <span>$</span>
                status
              </div>

              <div className="terminal-status-line">
                <span className="status-indicator"></span>
                ONLINE / LEARNING
              </div>


              <div className="terminal-final">
                <span>$</span>
                <span className="terminal-cursor">
                  _
                </span>
              </div>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}

export default About;