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
      github: "https://github.com/Kiran-0226/KrishiBandhu",
      demo: "https://krishibandhu-frontend.onrender.com/login",
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
      github: "https://github.com/Kiran-0226/visionscope-ai",
      demo: null,
    },
  ];

  return (
    <main className="projects-page">

      {/* =====================================================
          BACKGROUND SYSTEM
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

            <span>
              PROJECTS / WORK
            </span>

          </div>


          <p className="projects-command">

            <span>$</span>

            <span>
              ls projects/
            </span>

          </p>


          <h1>
            Things I've
            <span> built.</span>
          </h1>


          <p className="projects-intro">
            A collection of projects I've worked on while exploring
            software development, artificial intelligence, and
            cybersecurity.
          </p>

        </header>


        {/* ===================================================
            PROJECT LIST
        =================================================== */}

        <section className="projects-list">

          {projects.map((project, projectIndex) => (

            <article
              className="project-card"
              key={project.number}
              style={{
                "--project-delay": `${1 + projectIndex * 0.3}s`,
              }}
            >

              {/* Card scan effect */}

              <div className="project-card-scan"></div>

              <div className="project-card-corner project-corner-one"></div>
              <div className="project-card-corner project-corner-two"></div>


              {/* =================================================
                  PROJECT TOP
              ================================================= */}

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


              {/* =================================================
                  PROJECT CONTENT
              ================================================= */}

              <div className="project-content">


                {/* Description */}

                <div className="project-description">

                  <span className="project-content-label">
                    DESCRIPTION
                  </span>

                  <p>
                    {project.description}
                  </p>

                </div>


                {/* Stack */}

                <div className="project-stack-section">

                  <span className="stack-label">
                    STACK
                  </span>


                  <div className="project-stack">

                    {project.stack.map(
                      (technology, technologyIndex) => (

                        <span
                          className="stack-item"
                          key={technology}
                          style={{
                            "--stack-delay": `${1.5 + projectIndex * 0.3 + technologyIndex * 0.06}s`,
                          }}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>


              {/* =================================================
                  PROJECT FOOTER
              ================================================= */}

              <div className="project-footer">


                <div className="project-command">

                  <span>
                    $
                  </span>

                  <span>
                    ./open_project.sh
                  </span>

                  <span className="project-command-cursor">
                    _
                  </span>

                </div>


                <div className="project-links">


                  {/* GitHub */}

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <span>
                      GITHUB
                    </span>

                    <span className="project-link-arrow">
                      ↗
                    </span>

                  </a>


                  {/* Live Demo */}

                  {project.demo ? (

                    <a
                      href={project.demo}
                      className="project-link project-link-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <span>
                        LIVE DEMO
                      </span>

                      <span className="project-link-arrow">
                        ↗
                      </span>

                    </a>

                  ) : (

                    <span className="project-link project-link-disabled">

                      <span>
                        LIVE DEMO
                      </span>

                      <span>
                        ⌛
                      </span>

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

          <div className="projects-terminal-header">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>


            <span>
              projects@kiran ~ /portfolio
            </span>


            <span className="projects-terminal-live">
              SCAN_COMPLETE
            </span>

          </div>


          <div className="projects-terminal-body">


            <div className="terminal-line projects-line-1">

              <span>
                $
              </span>

              find ./projects -type f

            </div>


            <div className="terminal-output projects-output-1">

              <span>
                ./projects/
              </span>

              <strong>
                krishibandhu
              </strong>

              <small>
                ACTIVE
              </small>

            </div>


            <div className="terminal-output projects-output-2">

              <span>
                ./projects/
              </span>

              <strong>
                visionscope-ai
              </strong>

              <small>
                DEVELOPMENT
              </small>

            </div>


            <div className="terminal-line projects-line-2">

              <span>
                $
              </span>

              ./projects --status

            </div>


            <div className="terminal-output projects-output-3">

              <span className="output-arrow">
                →
              </span>

              2 PROJECTS DETECTED / SYSTEM ACTIVE

            </div>


            <div className="terminal-line terminal-last-line">

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


      {/* =====================================================
          BOTTOM SYSTEM LINE
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