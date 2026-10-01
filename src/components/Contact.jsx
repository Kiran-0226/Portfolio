import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing."
        );
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );

      setStatus({
        type: "success",
        message:
          "Message sent successfully. I'll get back to you soon.",
      });

      formRef.current.reset();

    } catch (error) {

      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send the message. Please try again or contact me directly by email.",
      });

    } finally {

      setSending(false);

    }
  };


  return (
    <main className="contact-page">

      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header">

          <div className="contact-system">
            <span className="contact-dot"></span>
            CONTACT / CONNECT
          </div>

          <p className="contact-command">
            <span>$</span> ./connect.sh
          </p>

          <h1>
            Let's build
            <span> something.</span>
          </h1>

          <p className="contact-intro">
            I'm open to internship opportunities, projects,
            collaborations, and conversations around
            cybersecurity and full-stack development.
          </p>

        </header>


        {/* CONTACT CONTENT */}
        <section className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            {/* TERMINAL */}
            <div className="contact-terminal">

              <div className="contact-terminal-header">

                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>
                  contact@kiran ~ /portfolio
                </span>

              </div>


              <div className="contact-terminal-body">

                <div className="contact-terminal-line">
                  <span>$</span>
                  whoami
                </div>

                <div className="contact-terminal-output">
                  <span>name:</span>
                  <strong>KIRAN GOWDA D</strong>
                </div>

                <div className="contact-terminal-output">
                  <span>role:</span>
                  <strong>COMPUTER ENGINEERING STUDENT</strong>
                </div>

                <div className="contact-terminal-output">
                  <span>focus:</span>
                  <strong>CYBERSECURITY + FULL-STACK</strong>
                </div>

                <div className="contact-terminal-output">
                  <span>status:</span>
                  <strong>OPEN TO OPPORTUNITIES</strong>
                </div>

                <div className="contact-terminal-line contact-terminal-last">
                  <span>$</span>
                  <span className="contact-cursor">_</span>
                </div>

              </div>

            </div>


            {/* EMAIL */}
            <a
              href="mailto:kirangowda0226@gmail.com"
              className="contact-method"
            >

              <div className="contact-method-icon">
                @
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  EMAIL
                </span>

                <strong>
                  kirangowda0226@gmail.com
                </strong>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/Kiran-0226"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >

              <div className="contact-method-icon">
                &lt;/&gt;
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  GITHUB
                </span>

                <strong>
                  github.com/Kiran-0226
                </strong>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/kiran-gowda-d-57114b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >

              <div className="contact-method-icon">
                in
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  LINKEDIN
                </span>

                <strong>
                  linkedin.com/in/kiran-gowda-d-57114b329
                </strong>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>

          </div>


          {/* RIGHT SIDE */}
          <div className="contact-message">

            <div className="contact-message-header">
              <span>01</span>
              SEND A MESSAGE
            </div>


            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="contact-form-group">

                <label htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  disabled={sending}
                />

              </div>


              {/* EMAIL */}
              <div className="contact-form-group">

                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  disabled={sending}
                />

              </div>


              {/* SUBJECT */}
              <div className="contact-form-group">

                <label htmlFor="subject">
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  disabled={sending}
                />

              </div>


              {/* MESSAGE */}
              <div className="contact-form-group">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  disabled={sending}
                ></textarea>

              </div>


              {/* STATUS MESSAGE */}
              {status.message && (
                <div
                  className="contact-form-status"
                  aria-live="polite"
                  style={{
                    marginBottom: "10px",
                    padding: "9px 10px",
                    border: `1px solid ${
                      status.type === "success"
                        ? "rgba(0, 255, 136, 0.35)"
                        : "rgba(255, 80, 80, 0.35)"
                    }`,
                    background:
                      status.type === "success"
                        ? "rgba(0, 255, 136, 0.04)"
                        : "rgba(255, 80, 80, 0.04)",
                    color:
                      status.type === "success"
                        ? "#00ff88"
                        : "#ff7070",
                    fontFamily: '"Courier New", monospace',
                    fontSize: "9px",
                    lineHeight: "1.5",
                  }}
                >
                  <span>
                    {status.type === "success"
                      ? "✓ "
                      : "✕ "}
                  </span>

                  {status.message}
                </div>
              )}


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
                style={{
                  opacity: sending ? 0.7 : 1,
                  cursor: sending
                    ? "not-allowed"
                    : "pointer",
                }}
              >

                <span>
                  $
                </span>

                {sending
                  ? "SENDING..."
                  : "SEND MESSAGE"}

                <span>
                  {sending ? "..." : "↗"}
                </span>

              </button>

            </form>

          </div>

        </section>


        {/* FOOTER TERMINAL */}
        <section className="contact-footer-terminal">

          <div className="contact-footer-line">
            <span>$</span>
            echo "Thanks for stopping by."
          </div>

          <div className="contact-footer-line">
            <span className="contact-footer-success">
              ✓
            </span>
            connection_ready
          </div>

        </section>

      </div>

    </main>
  );
}

export default Contact;