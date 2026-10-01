import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "KRISHIBANDHU",
      type: "FULL-STACK APPLICATION",
      description:
        "A full-stack agriculture platform focused on crop management and agricultural market information.",
      stack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      status: "ACTIVE",
      github:
        "https://github.com/Kiran-0226/KrishiBandhu",
      demo:
        "https://krishibandhu-frontend.onrender.com/login",
    },

    {
      number: "02",
      title: "VISIONSCOP-AI",
      type: "AI APPLICATION",
      description:
        "An AI-powered project currently under development, focused on exploring intelligent computer-based solutions and practical AI applications.",
      stack: [
        "React",
        "JavaScript",
        "AI",
        "Node.js",
      ],
      status: "IN DEVELOPMENT",
      github:
        "https://github.com/Kiran-0226/visionscope-ai",
      demo: null,
    },
  ];

  return (
    <main className="projects-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="projects-grid-bg"></div>

      <div className="projects-scan-line"></div>

      <div className="projects-glow projects-glow-one"></div>

      <div className="projects-glow projects-glow-two"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="projects-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="projects-header">

          <div className="projects-system">
            <span className="projects-dot"></span>

            PROJECTS / WORK
          </div>

          <p className="projects-command">

            <span className="projects-command-symbol">
              $
            </span>

            <span>
              ls projects/
            </span>

          </p>

          <h1>
            Things I've
            <span> built.</span>
          </h1>

          <p className="projects-intro">
            A collection of projects I've worked on while
            exploring software development, artificial
            intelligence, and cybersecurity.
          </p>

        </header>


        {/* ===================================================
            PROJECT CARDS
        =================================================== */}

        <section className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              {/* -----------------------------------------------
                  CARD HEADER
              ----------------------------------------------- */}

              <div className="project-top">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-heading">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                </div>

                <div
                  className={`project-status ${
                    project.status === "IN DEVELOPMENT"
                      ? "project-status-development"
                      : ""
                  }`}
                >

                  <span></span>

                  {project.status}

                </div>

              </div>


              {/* -----------------------------------------------
                  CARD CONTENT
              ----------------------------------------------- */}

              <div className="project-content">

                <div className="project-description">

                  <span className="project-section-label">
                    DESCRIPTION
                  </span>

                  <p>
                    {project.description}
                  </p>

                </div>

                <div className="project-stack-section">

                  <span className="stack-label">
                    STACK
                  </span>

                  <div className="project-stack">

                    {project.stack.map((technology) => (

                      <span
                        className="stack-item"
                        key={technology}
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              </div>


              {/* -----------------------------------------------
                  CARD FOOTER
              ----------------------------------------------- */}

              <div className="project-footer">

                <div className="project-command">

                  <span>
                    $
                  </span>

                  <span>
                    ./open_project.sh
                  </span>

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                    <span>↗</span>
                  </a>

                  {project.demo ? (

                    <a
                      href={project.demo}
                      className="project-link project-link-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                      <span>↗</span>
                    </a>

                  ) : (

                    <span className="project-link project-link-disabled">
                      LIVE DEMO
                      <span>⌛</span>
                    </span>

                  )}

                </div>

              </div>

            </article>

          ))}

        </section>


        {/* ===================================================
            TERMINAL
        =================================================== */}

        <section className="projects-terminal">

          {/* Terminal Header */}

          <div className="projects-terminal-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <span className="projects-terminal-title">
              projects@kiran ~ /portfolio
            </span>

            <span className="projects-terminal-status">
              SCAN_COMPLETE
            </span>

          </div>


          {/* Terminal Body */}

          <div className="projects-terminal-body">

            {/* -----------------------------------------------
                COMMAND
            ----------------------------------------------- */}

            <div className="terminal-line terminal-command-one">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                find ./projects -type f
              </span>

            </div>


            {/* -----------------------------------------------
                PROJECT 01
            ----------------------------------------------- */}

            <div className="terminal-project-row">

              <span className="terminal-project-path">
                ./projects/
              </span>

              <span className="terminal-project-name">
                krishibandhu
              </span>

              <span className="terminal-project-status terminal-active">
                ACTIVE
              </span>

            </div>


            {/* -----------------------------------------------
                PROJECT 02
            ----------------------------------------------- */}

            <div className="terminal-project-row">

              <span className="terminal-project-path">
                ./projects/
              </span>

              <span className="terminal-project-name">
                visionscope-ai
              </span>

              <span className="terminal-project-status terminal-development">
                IN DEVELOPMENT
              </span>

            </div>


            {/* -----------------------------------------------
                STATUS COMMAND
            ----------------------------------------------- */}

            <div className="terminal-line terminal-status-command">

              <span className="terminal-prompt">
                $
              </span>

              <span>
                ./projects --status
              </span>

            </div>


            {/* -----------------------------------------------
                STATUS OUTPUT
            ----------------------------------------------- */}

            <div className="terminal-status-output">

              <span className="terminal-output-arrow">
                →
              </span>

              <span>
                2 PROJECTS DETECTED / SYSTEM ACTIVE
              </span>

            </div>


            {/* -----------------------------------------------
                FINAL COMMAND
            ----------------------------------------------- */}

            <div className="terminal-line terminal-last-line">

              <span className="terminal-prompt">
                $
              </span>

              <span className="terminal-cursor">
                _
              </span>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          BOTTOM PAGE INDICATOR
      ===================================================== */}

      <div className="projects-bottom-line">

        <span></span>

        <span>
          04 / PROJECTS
        </span>

        <span></span>

      </div>

    </main>
  );
}

export default Projects;