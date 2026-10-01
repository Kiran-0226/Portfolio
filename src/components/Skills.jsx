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
            <div className="skills-container">

                {/* HEADER */}
                <header className="skills-header">
                    <div className="skills-system">
                        <span className="skills-dot"></span>
                        SKILLS / TECHNOLOGIES
                    </div>

                    <p className="skills-command">
                        <span>$</span> cat skills.json
                    </p>

                    <h1>
                        Tools I use.
                        <span> Technologies I build with.</span>
                    </h1>

                    <p className="skills-intro">
                        Technologies, programming languages, development tools,
                        and cybersecurity concepts that are part of my current
                        learning and development journey.
                    </p>
                </header>

                {/* SKILL GROUPS */}
                <section className="skills-grid">
                    {skillGroups.map((group) => (
                        <article className="skill-panel" key={group.number}>

                            <div className="skill-panel-top">
                                <span className="skill-number">
                                    {group.number}
                                </span>

                                <div>
                                    <h2>{group.title}</h2>

                                    <p className="skill-terminal-command">
                                        <span>$</span> {group.command}
                                    </p>
                                </div>
                            </div>

                            <div className="skill-list">
                                {group.skills.map((skill) => (
                                    <div className="skill-item" key={skill}>
                                        <span className="skill-arrow">&gt;</span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>

                        </article>
                    ))}
                </section>

                {/* TERMINAL */}
                <section className="skills-terminal">
                    <div className="skills-terminal-header">

                        <div className="terminal-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <span>skills@kiran ~ /portfolio</span>
                    </div>

                    <div className="skills-terminal-body">

                        <div className="terminal-line">
                            <span>$</span> ./current_focus.sh
                        </div>

                        <div className="terminal-terminal-output">
                            <span className="output-arrow">→</span>
                            Cybersecurity &amp; Full-Stack Development
                        </div>

                        <div className="terminal-line">
                            <span>$</span> ./learning.sh
                        </div>

                        <div className="terminal-terminal-output">
                            <span className="output-arrow">→</span>
                            Ethical Hacking
                        </div>

                        <div className="terminal-terminal-output">
                            <span className="output-arrow">→</span>
                            Web Application Security
                        </div>

                        <div className="terminal-terminal-output">
                            <span className="output-arrow">→</span>
                            Linux &amp; Networking
                        </div>

                        <div className="terminal-terminal-output">
                            <span className="output-arrow">→</span>
                            Offensive Security
                        </div>

                        <div className="terminal-final-line">
                            <span>$</span>
                            <span className="terminal-cursor">_</span>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
}

export default Skills;