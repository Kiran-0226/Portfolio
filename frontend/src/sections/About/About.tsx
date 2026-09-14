import { about } from '../../data/about'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './About.css'

function About() {
  return (
    <section id="about">
      <SectionTitle title={about.heading} />

      <p>{about.description}</p>

      {about.location && <span>{about.location}</span>}
    </section>
  )
}

export default About