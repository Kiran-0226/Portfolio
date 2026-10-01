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
    <main
      className={`contact-page ${
        sending ? "contact-sending" : ""
      } ${
        status.type === "success"
          ? "contact-success"
          : ""
      } ${
        status.type === "error"
          ? "contact-error"
          : ""
      }`}
    >

      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="contact-grid-bg"></div>

      <div className="contact-scan-line"></div>

      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-signal contact-signal-one"></div>
      <div className="contact-signal contact-signal-two"></div>


      <div className="contact-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="contact-header">

          <div className="contact-system">

            <span className="contact-dot"></span>

            CONTACT / CONNECT

          </div>


          <p className="contact-command">

            <span>$</span>

            <span className="contact-command-text">
              ./connect.sh
            </span>

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


        {/* ===================================================
            CONNECTION STATUS
        =================================================== */}

        <section className="contact-connection-status">

          <div className="connection-status-left">

            <span className="connection-pulse"></span>

            <span className="connection-label">
              SECURE CHANNEL
            </span>

            <span className="connection-divider">
              //
            </span>

            <span className="connection-state">
              {sending
                ? "TRANSMITTING"
                : status.type === "success"
                ? "TRANSMISSION COMPLETE"
                : status.type === "error"
                ? "TRANSMISSION ERROR"
                : "CHANNEL READY"}
            </span>

          </div>


          <div className="connection-code">
            TLS://CONTACT
          </div>

        </section>


        {/* ===================================================
            CONTACT CONTENT
        =================================================== */}

        <section className="contact-grid">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-info">


            {/* ===============================================
                TERMINAL
            =============================================== */}

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

                <span className="contact-terminal-status">
                  ONLINE
                </span>

              </div>


              <div className="contact-terminal-body">

                <div className="contact-terminal-line contact-line-one">

                  <span>$</span>

                  whoami

                </div>


                <div className="contact-terminal-output contact-output-one">

                  <span>name:</span>

                  <strong>
                    KIRAN GOWDA D
                  </strong>

                </div>


                <div className="contact-terminal-output contact-output-two">

                  <span>role:</span>

                  <strong>
                    COMPUTER ENGINEERING STUDENT
                  </strong>

                </div>


                <div className="contact-terminal-output contact-output-three">

                  <span>focus:</span>

                  <strong>
                    CYBERSECURITY + FULL-STACK
                  </strong>

                </div>


                <div className="contact-terminal-output contact-output-four">

                  <span>status:</span>

                  <strong>
                    OPEN TO OPPORTUNITIES
                  </strong>

                </div>


                <div className="contact-terminal-line contact-terminal-last">

                  <span>$</span>

                  <span className="contact-cursor">
                    _
                  </span>

                </div>

              </div>

            </div>


            {/* ===============================================
                CONTACT METHODS
            =============================================== */}

            <div className="contact-methods">


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

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="contact-message">

            <div className="contact-message-header">

              <span>
                01
              </span>

              <span>
                SEND A MESSAGE
              </span>

              <span className="message-header-status">
                ENCRYPTED
              </span>

            </div>


            {/* FORM */}

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >


              {/* =============================================
                  NAME
              ============================================= */}

              <div className="contact-form-group">

                <label htmlFor="name">
                  NAME
                </label>


                <div className="contact-input-wrapper">

                  <span className="input-prefix">
                    &gt;
                  </span>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    disabled={sending}
                  />

                  <span className="input-status">
                    ●
                  </span>

                </div>

              </div>


              {/* =============================================
                  EMAIL
              ============================================= */}

              <div className="contact-form-group">

                <label htmlFor="email">
                  EMAIL
                </label>


                <div className="contact-input-wrapper">

                  <span className="input-prefix">
                    &gt;
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    disabled={sending}
                  />

                  <span className="input-status">
                    ●
                  </span>

                </div>

              </div>


              {/* =============================================
                  SUBJECT
              ============================================= */}

              <div className="contact-form-group">

                <label htmlFor="subject">
                  SUBJECT
                </label>


                <div className="contact-input-wrapper">

                  <span className="input-prefix">
                    &gt;
                  </span>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                    disabled={sending}
                  />

                  <span className="input-status">
                    ●
                  </span>

                </div>

              </div>


              {/* =============================================
                  MESSAGE
              ============================================= */}

              <div className="contact-form-group">

                <label htmlFor="message">
                  MESSAGE
                </label>


                <div className="contact-input-wrapper textarea-wrapper">

                  <span className="input-prefix textarea-prefix">
                    &gt;
                  </span>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                    disabled={sending}
                  ></textarea>

                </div>

              </div>


              {/* =============================================
                  TRANSMISSION STATUS
              ============================================= */}

              {sending && (
                <div className="contact-transmission">

                  <div className="transmission-header">

                    <span>
                      $ ./transmit_message.sh
                    </span>

                    <span>
                      ACTIVE
                    </span>

                  </div>


                  <div className="transmission-bar">

                    <span></span>

                  </div>


                  <div className="transmission-info">

                    <span>
                      ENCRYPTING PAYLOAD
                    </span>

                    <span className="transmission-dots">
                      ...
                    </span>

                  </div>

                </div>
              )}


              {/* =============================================
                  STATUS MESSAGE
              ============================================= */}

              {status.message && (

                <div
                  className={`contact-form-status ${
                    status.type === "success"
                      ? "status-success"
                      : "status-error"
                  }`}
                  aria-live="polite"
                >

                  <span className="status-icon">

                    {status.type === "success"
                      ? "✓"
                      : "✕"}

                  </span>


                  <div>

                    <strong>
                      {status.type === "success"
                        ? "TRANSMISSION COMPLETE"
                        : "TRANSMISSION FAILED"}
                    </strong>

                    <p>
                      {status.message}
                    </p>

                  </div>

                </div>

              )}


              {/* =============================================
                  SUBMIT BUTTON
              ============================================= */}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >

                <span className="submit-prefix">
                  $
                </span>


                <span className="submit-text">

                  {sending
                    ? "TRANSMITTING..."
                    : "TRANSMIT MESSAGE"}

                </span>


                <span className="submit-arrow">

                  {sending
                    ? "..."
                    : "↗"}

                </span>

              </button>


            </form>

          </div>

        </section>


        {/* ===================================================
            FOOTER TERMINAL
        =================================================== */}

        <section className="contact-footer-terminal">

          <div className="contact-footer-line">

            <span>
              $
            </span>

            echo "Thanks for stopping by."

          </div>


          <div className="contact-footer-line">

            <span className="contact-footer-success">
              ✓
            </span>

            connection_ready

          </div>


          <div className="contact-footer-line">

            <span>
              $
            </span>

            <span className="contact-footer-cursor">
              _
            </span>

          </div>

        </section>

      </div>


      {/* =====================================================
          BOTTOM SYSTEM LINE
      ===================================================== */}

      <div className="contact-bottom-line">

        <span></span>

        <span>
          07 / CONTACT
        </span>

        <span></span>

      </div>

    </main>
  );
}

export default Contact;