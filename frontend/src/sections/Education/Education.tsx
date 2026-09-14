import { education } from '../../data/education'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Education.css'

function Education() {
  return (
    <section id="education">
      <SectionTitle title="Education" />

      <div>
        {education.map((item) => (
          <article key={item.id}>
            <h3>{item.degree}</h3>

            <p>{item.field}</p>

            <strong>{item.institution}</strong>

            <span>
              {item.startDate} - {item.endDate ?? 'Present'}
            </span>

            {item.description && <p>{item.description}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education