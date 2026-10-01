import "./Resume.css";

function Resume() {
  return (
    <main className="resume-page">

      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="resume-grid-bg"></div>

      <div className="resume-scan-line"></div>

      <div className="resume-glow resume-glow-one"></div>
      <div className="resume-glow resume-glow-two"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="resume-container">


        {/* ===================================================
            TERMINAL HEADER
        =================================================== */}

        <div className="resume-terminal-header">

          <div className="terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-title">
            kiran@portfolio:~/resume
          </div>

          <div className="terminal-live">
            SECURE_ACCESS
          </div>

        </div>


        {/* ===================================================
            RESUME HEADING
        =================================================== */}

        <section className="resume-heading">

          <div className="resume-heading-content">

            <p className="resume-command">

              <span>$</span>

              <span className="resume-command-text">
                cat resume.pdf
              </span>

            </p>


            <h1>
              KIRAN GOWDA D<span>.</span>
            </h1>


            <p className="resume-subtitle">
              Cybersecurity Enthusiast &amp; Full-Stack Developer
            </p>

          </div>


          {/* STATUS */}

          <div className="resume-status">

            <span className="status-dot"></span>

            AVAILABLE

          </div>

        </section>


        {/* ===================================================
            FILE ACCESS PANEL
        =================================================== */}

        <section className="resume-file-panel">

          <div className="resume-file-icon">

            <div className="file-icon-top"></div>

            <div className="file-icon-body">

              <span>PDF</span>

            </div>

            <div className="file-icon-corner"></div>

          </div>


          <div className="resume-file-info">

            <div className="resume-file-name">
              resume.pdf
            </div>

            <div className="resume-file-path">
              ~/portfolio/public/resume.pdf
            </div>

            <div className="resume-file-meta">

              <span>
                TYPE: PDF
              </span>

              <span>
                ACCESS: PUBLIC
              </span>

              <span>
                STATUS: READY
              </span>

            </div>

          </div>


          <div className="resume-file-ready">

            <span className="ready-dot"></span>

            <span>
              PDF_READY
            </span>

          </div>

        </section>


        {/* ===================================================
            ACTIONS
        =================================================== */}

        <section className="resume-actions">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary"
          >

            <span className="button-icon">
              ◉
            </span>

            <span>
              View Resume
            </span>

            <span className="button-arrow">
              ↗
            </span>

          </a>


          <a
            href="/resume.pdf"
            download="Kiran_Gowda_D_Resume.pdf"
            className="resume-btn secondary"
          >

            <span className="button-icon">
              ↓
            </span>

            <span>
              Download Resume
            </span>

            <span className="button-arrow">
              ↓
            </span>

          </a>

        </section>


        {/* ===================================================
            ACCESS TERMINAL
        =================================================== */}

        <section className="resume-access-terminal">

          <div className="resume-access-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span>
              file_access@kiran
            </span>

            <span className="access-status">
              ONLINE
            </span>

          </div>


          <div className="resume-access-body">


            {/* COMMAND 1 */}

            <div className="access-line access-line-one">

              <span className="prompt">
                $
              </span>

              <span>
                locate resume.pdf
              </span>

            </div>


            {/* OUTPUT 1 */}

            <div className="access-output access-output-one">

              <span className="output-arrow">
                →
              </span>

              <span>
                /portfolio/public/resume.pdf
              </span>

            </div>


            {/* COMMAND 2 */}

            <div className="access-line access-line-two">

              <span className="prompt">
                $
              </span>

              <span>
                verify --file resume.pdf
              </span>

            </div>


            {/* OUTPUT 2 */}

            <div className="access-output access-output-two">

              <span className="output-arrow">
                →
              </span>

              <span>
                FILE ACCESS VERIFIED
              </span>

            </div>


            {/* COMMAND 3 */}

            <div className="access-line access-line-three">

              <span className="prompt">
                $
              </span>

              <span>
                system --resume-status
              </span>

            </div>


            {/* STATUS */}

            <div className="access-status-output">

              <span className="status-indicator"></span>

              <span>
                READY FOR ACCESS
              </span>

            </div>


            {/* FINAL COMMAND */}

            <div className="resume-terminal-footer">

              <span className="prompt">
                $
              </span>

              <span>
                ./open-resume.sh
              </span>

              <span className="cursor">
                _
              </span>

            </div>

          </div>

        </section>


      </div>


      {/* =====================================================
          BOTTOM SYSTEM LINE
      ===================================================== */}

      <div className="resume-bottom-line">

        <span></span>

        <span>
          06 / RESUME
        </span>

        <span></span>

      </div>

    </main>
  );
}

export default Resume;