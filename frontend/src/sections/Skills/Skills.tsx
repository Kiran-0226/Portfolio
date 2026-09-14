import { skills } from '../../data/skills'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="Skills" />

      <div>
        {skills.map((skill) => (
          <article key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
            <span>{skill.level}%</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills