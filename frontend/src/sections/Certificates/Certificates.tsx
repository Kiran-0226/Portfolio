import { certificates } from '../../data/certificates'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Certificates.css'

function Certificates() {
  return (
    <section id="certificates">
      <SectionTitle title="Certificates" />

      <div>
        {certificates.map((certificate) => (
          <article key={certificate.id}>
            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <span>{certificate.issueDate}</span>

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Credential
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates