import { useParams, Link } from 'react-router-dom'
import { portfolio } from '@data/portfolio'

export function ProjectDetail() {
  const { id } = useParams()
  const project = portfolio.find(p => p.id === id)

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Project not found</h2>
          <p style={{ color: 'var(--muted)' }}>We couldn't find the project you're looking for.</p>
          <div style={{ marginTop: 16 }}>
            <Link className="btn" to="/portfolio">Back to Portfolio</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="hero">
        <div className="container">
          <span className="badge">{project.tag}</span>
          <h1 style={{ marginTop: 8 }}>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr' }}>
          <img src={project.image} alt={project.title} style={{ borderRadius: 12 }} />
          <div>
            <Link className="btn" to="/portfolio">Back to Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  )
}
