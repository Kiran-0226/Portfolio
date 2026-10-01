import "./Skills.css";

function Skills() {
    const skillGroups = [
        {
            number: "01",
            title: "PROGRAMMING",
            command: "ls programming/",
            skills: [
                "C++",
                "Python",
                "C",
                "Java",
                "JavaScript",
            ],
        },
        {
            number: "02",
            title: "WEB DEVELOPMENT",
            command: "ls web-stack/",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
            ],
        },
        {
            number: "03",
            title: "CYBERSECURITY",
            command: "ls security/",
            skills: [
                "Ethical Hacking",
                "Web Security",
                "Linux",
                "Kali Linux",
                "Networking",
            ],
        },
        {
            number: "04",
            title: "TOOLS",
            command: "ls tools/",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "MongoDB Atlas",
                "Postman",
                "Render",
            ],
        },
    ];

    return (
        <main className="skills-page">

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="skills-grid-bg"></div>

            <div className="skills-scan-line"></div>

            <div className="skills-glow skills-glow-one"></div>

            <div className="skills-glow skills-glow-two"></div>


            <div className="skills-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="skills-header">

                    <div className="skills-system">

                        <span className="skills-dot"></span>

                        <span>
                            SKILLS / TECHNOLOGIES
                        </span>

                    </div>


                    <p className="skills-command">

                        <span className="command-symbol">
                            $
                        </span>

                        <span className="command-text">
                            cat skills.json
                        </span>

                        <span className="command-cursor">
                            _
                        </span>

                    </p>


                    <h1 className="skills-title">

                        <span className="title-normal">
                            Tools I use.
                        </span>

                        <span className="title-green">
                            Technologies I build with.
                        </span>

                    </h1>


                    <p className="skills-intro">
                        Technologies, programming languages, development tools,
                        and cybersecurity concepts that are part of my current
                        learning and development journey.
                    </p>

                </header>


                {/* =================================================
                    SKILL MODULES
                ================================================= */}

                <section className="skills-grid">

                    {skillGroups.map((group, groupIndex) => (

                        <article
                            className={`skill-panel skill-panel-${groupIndex + 1}`}
                            key={group.number}
                        >

                            {/* BOOT SCAN */}

                            <div className="skill-boot-scan"></div>


                            {/* PANEL HEADER */}

                            <div className="skill-panel-top">

                                <div className="skill-number">
                                    {group.number}
                                </div>


                                <div className="skill-panel-heading">

                                    <h2>
                                        {group.title}
                                    </h2>

                                    <p className="skill-terminal-command">

                                        <span>
                                            $
                                        </span>

                                        {group.command}

                                    </p>

                                </div>


                                <div className="skill-loaded">

                                    <span></span>

                                    LOADED

                                </div>

                            </div>


                            {/* SKILLS */}

                            <div className="skill-list">

                                {group.skills.map(
                                    (skill, skillIndex) => (

                                        <div
                                            className="skill-item"
                                            key={skill}
                                            style={{
                                                "--skill-index":
                                                    skillIndex,
                                            }}
                                        >

                                            <span className="skill-arrow">
                                                &gt;
                                            </span>

                                            <span className="skill-name">
                                                {skill}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>


                            {/* HOVER SCAN */}

                            <div className="skill-hover-scan"></div>

                        </article>

                    ))}

                </section>


                {/* =================================================
                    TERMINAL
                ================================================= */}

                <section className="skills-terminal">

                    <div className="skills-terminal-header">

                        <div className="terminal-dots">

                            <span></span>
                            <span></span>
                            <span></span>

                        </div>


                        <span className="terminal-title">
                            skills@kiran ~ /portfolio
                        </span>


                        <span className="skills-terminal-status">
                            ONLINE
                        </span>

                    </div>


                    <div className="skills-terminal-body">

                        <div className="terminal-line terminal-command-one">

                            <span>
                                $
                            </span>

                            <span>
                                ./current_focus.sh
                            </span>

                        </div>


                        <div className="terminal-output terminal-output-one">

                            <span className="output-arrow">
                                →
                            </span>

                            <span>
                                Cybersecurity &amp; Full-Stack Development
                            </span>

                        </div>


                        <div className="terminal-line terminal-command-two">

                            <span>
                                $
                            </span>

                            <span>
                                ./learning.sh
                            </span>

                        </div>


                        <div className="terminal-output terminal-output-two">

                            <span className="output-arrow">
                                →
                            </span>

                            <span>
                                Ethical Hacking
                            </span>

                        </div>


                        <div className="terminal-output terminal-output-three">

                            <span className="output-arrow">
                                →
                            </span>

                            <span>
                                Web Application Security
                            </span>

                        </div>


                        <div className="terminal-output terminal-output-four">

                            <span className="output-arrow">
                                →
                            </span>

                            <span>
                                Linux &amp; Networking
                            </span>

                        </div>


                        <div className="terminal-output terminal-output-five">

                            <span className="output-arrow">
                                →
                            </span>

                            <span>
                                Offensive Security
                            </span>

                        </div>


                        <div className="terminal-final-line">

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
                BOTTOM INDICATOR
            ===================================================== */}

            <div className="skills-bottom-line">

                <span></span>

                <span>
                    03 / SKILLS
                </span>

                <span></span>

            </div>

        </main>
    );
}

export default Skills;