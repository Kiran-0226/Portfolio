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
      <div className="projects-container">

        {/* HEADER */}
        <header className="projects-header">
          <div className="projects-system">
            <span className="projects-dot"></span>
            PROJECTS / WORK
          </div>

          <p className="projects-command">
            <span>$</span> ls projects/
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

        {/* PROJECT LIST */}
        <section className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              {/* PROJECT TOP */}
              <div className="project-top">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-heading">
                  <span className="project-type">
                    {project.type}
                  </span>

                  <h2>{project.title}</h2>
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

              {/* PROJECT CONTENT */}
              <div className="project-content">

                <div className="project-description">
                  <p>{project.description}</p>
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

              {/* PROJECT FOOTER */}
              <div className="project-footer">

                <div className="project-command">
                  <span>$</span>
                  ./open_project.sh
                </div>

                <div className="project-links">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                    <span>↗</span>
                  </a>

                  {/* LIVE DEMO */}
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

        {/* TERMINAL */}
        <section className="projects-terminal">

          <div className="projects-terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>projects@kiran ~ /portfolio</span>

          </div>

          <div className="projects-terminal-body">

            <div className="terminal-line">
              <span>$</span>
              find ./projects -type f
            </div>

            <div className="terminal-output">
              <span>./projects/</span>
              <strong>krishibandhu</strong>
            </div>

            <div className="terminal-output">
              <span>./projects/</span>
              <strong>visionscope-ai</strong>
            </div>

            <div className="terminal-line terminal-last-line">
              <span>$</span>
              <span className="terminal-cursor">_</span>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Projects;