import { Hero } from '@components/Hero'
import { Section } from '@components/Section'
import { PortfolioCard } from '@components/PortfolioCard'
import { portfolio } from '@data/portfolio'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <Hero />
      <Section title="Featured Projects" subtitle="A selection from our portfolio">
        <div className="card-grid">
          {portfolio.slice(0,3).map(p => (
            <PortfolioCard key={p.id} item={p} />
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" to="/portfolio">See all projects</Link>
        </div>
      </Section>
      <Section title="Our Services" subtitle="End-to-end design tailored to you">
        <div className="card-grid">
          <div className="card"><div className="body">
            <span className="badge">Discovery</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1 15h-2v-2h2v2Zm1.8-7.7-.9.9c-.7.7-1.2 1.3-1.2 2.6h-2v-.5c0-1 .5-1.9 1.2-2.6l1.2-1.2c.3-.3.5-.7.5-1.2A2 2 0 0012 5a2 2 0 00-2 2H8a4 4 0 118 0c0 .9-.4 1.7-.9 2.3Z"/></svg>
            </div>
            <h3>Consultation</h3>
            <p>We start with your story and vision to define goals and scope.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Design</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z"/></svg>
            </div>
            <h3>Concept & Planning</h3>
            <p>Layouts, moodboards, and material selections aligned to your budget.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Delivery</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16v10h-7l-2 2-2-2H4z"/></svg>
            </div>
            <h3>Execution</h3>
            <p>Procurement, vendor coordination, and on-site styling to perfection.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Support</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"/></svg>
            </div>
            <h3>Styling & Aftercare</h3>
            <p>Final touches and ongoing advice to keep your space at its best.</p>
          </div></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" to="/services">Explore all services</Link>
        </div>
      </Section>
    </>
  )
}
