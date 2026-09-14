import { experience } from '../../data/experience'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Experience.css'

function Experience() {
  return (
    <section id="experience">
      <SectionTitle title="Experience" />

      <div>
        {experience.map((item) => (
          <article key={item.id}>
            <h3>{item.role}</h3>

            <strong>{item.company}</strong>

            <span>
              {item.startDate} - {item.endDate ?? 'Present'}
            </span>

            <p>{item.description}</p>

            <div>
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience