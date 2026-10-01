import "./Certificates.css";

import AA from "../assets/AA.jpg";
import AC from "../assets/AC.jpg";
import AI from "../assets/AI.jpg";
import BB from "../assets/BB.jpg";
import BCA from "../assets/BCA.jpg";
import CN from "../assets/CN.jpg";
import ISE from "../assets/ISE.jpg";

function Certificates() {
  const certificates = [
    {
      number: "01",
      title: "Agile with Atlassian Jira",
      issuer: "Atlassian",
      platform: "Coursera",
      date: "Oct 01, 2026",
      image: AA,
      verification:
        "https://www.coursera.org/account/accomplishments/verify/6I5KYHOLPWN1",
    },

    {
      number: "02",
      title: "Algorithms and Complexity",
      issuer: "University of London",
      platform: "Coursera",
      date: "Oct 01, 2026",
      image: AC,
      verification:
        "https://www.coursera.org/account/accomplishments/verify/3DLFLH0BRKXI",
    },

    {
      number: "03",
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      platform: "Coursera",
      date: "Sep 23, 2026",
      image: AI,
      verification:
        "https://coursera.org/verify/TLB7J4IPF8HM",
    },

    {
      number: "04",
      title: "Ethical Hacking Foundations and HTML Injection",
      issuer: "Packt",
      platform: "Coursera",
      date: "Oct 01, 2026",
      image: BB,
      verification:
        "https://www.coursera.org/account/accomplishments/records/FSMPAXWUJAYG",
    },

    {
      number: "05",
      title: "Blockchain and its Applications",
      issuer: "NPTEL / IIT Kharagpur",
      platform: "SWAYAM",
      date: "Jun–Aug 2026",
      image: BCA,
      verification:
        "https://nptel.ac.in/noc/E_Certificate/NOC26CS34S125020438704876612",
    },

    {
      number: "06",
      title: "Computer Networks: Implementation & Security",
      issuer: "EDUCBA",
      platform: "Coursera",
      date: "Sep 24, 2026",
      image: CN,
      verification:
        "https://www.coursera.org/account/accomplishments/records/KZ2L8AV045FQ",
    },

    {
      number: "07",
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      platform: "Coursera",
      date: "Sep 12, 2026",
      image: ISE,
      verification:
        "https://coursera.org/verify/WXQGT8UWANUM",
    },
  ];

  return (
    <main className="certificates-page">
      <div className="certificates-container">

        {/* HEADER */}
        <header className="certificates-header">

          <div className="certificates-system">
            <span className="certificates-dot"></span>
            CERTIFICATES / ACHIEVEMENTS
          </div>

          <p className="certificates-command">
            <span>$</span> ls certificates/
          </p>

          <h1>
            Things I've
            <span> learned.</span>
          </h1>

          <p className="certificates-intro">
            Certifications and courses completed while building
            my knowledge across software development, artificial
            intelligence, networking, and cybersecurity.
          </p>

        </header>

        {/* CERTIFICATE GRID */}
        <section className="certificates-grid">

          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.number}
            >

              {/* CERTIFICATE IMAGE */}
              <div className="certificate-image-wrapper">

                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificate-image"
                />

                <div className="certificate-overlay">

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-view-image"
                  >
                    VIEW CERTIFICATE
                    <span>↗</span>
                  </a>

                </div>

              </div>

              {/* CARD CONTENT */}
              <div className="certificate-content">

                <div className="certificate-number">
                  {certificate.number}
                </div>

                <div className="certificate-info">

                  <span className="certificate-platform">
                    {certificate.platform}
                  </span>

                  <h2>
                    {certificate.title}
                  </h2>

                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  <p className="certificate-date">
                    <span>$</span> issued: {certificate.date}
                  </p>

                </div>

              </div>

              {/* VERIFICATION FOOTER */}
              <div className="certificate-footer">

                <a
                  href={certificate.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-verify"
                >
                  VERIFY
                  <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </section>

        {/* TERMINAL */}
        <section className="certificates-terminal">

          <div className="certificates-terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>
              certificates@kiran ~ /portfolio
            </span>

          </div>

          <div className="certificates-terminal-body">

            <div className="terminal-line">
              <span>$</span>
              find ./certificates -type f
            </div>

            <div className="terminal-output">
              <span>./certificates/</span>
              <strong>
                {certificates.length} certificates found
              </strong>
            </div>

            <div className="terminal-output">
              <span>./status/</span>
              <strong>
                LEARNING CONTINUOUSLY
              </strong>
            </div>

            <div className="terminal-line terminal-last-line">
              <span>$</span>
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

export default Certificates;