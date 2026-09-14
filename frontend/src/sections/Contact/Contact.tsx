import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <SectionTitle title="Contact" />

      <p>
        Have a project, opportunity, or idea? Feel free to get in touch.
      </p>

      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={6}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact