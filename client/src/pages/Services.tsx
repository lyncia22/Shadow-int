import { Section } from '@components/Section'

export function Services() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Services</h1>
          <p>From concept to completion, we tailor our services to your needs and budget.</p>
        </div>
      </div>
      <Section title="What we offer" subtitle="A spectrum of services to match every scope and style">
        <div className="card-grid">
          <div className="card"><div className="body">
            <span className="badge">Residential</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l9 7-1.2 1.6L12 6.2 4.2 11.6 3 10z"/><path fill="currentColor" d="M5 12v8h5v-5h4v5h5v-8l-7-5z"/></svg>
            </div>
            <h3>Full Home Design</h3>
            <p>Holistic design for renovations or new builds, including sourcing and styling.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Space</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z"/></svg>
            </div>
            <h3>Room Refresh</h3>
            <p>Targeted updates with paint, furniture, lighting, and decor.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Commercial</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z"/></svg>
            </div>
            <h3>Retail & Hospitality</h3>
            <p>Customer-centric environments that reflect your brand and drive results.</p>
          </div></div>
          <div className="card"><div className="body">
            <span className="badge">Consult</span>
            <div className="icon-box" aria-hidden>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm2.1-6.5l-.9.9c-.7.7-1.2 1.3-1.2 2.6h-2v-.5c0-1 .5-1.9 1.2-2.6l1.2-1.2c.3-.3.5-.7.5-1.2A2 2 0 0012 6a2 2 0 00-2 2H8a4 4 0 118 0c0 .9-.4 1.7-.9 2.5z"/></svg>
            </div>
            <h3>Virtual Consultations</h3>
            <p>Advice sessions to help you plan and execute at your own pace.</p>
          </div></div>
        </div>
      </Section>

      <Section title="Our Process" subtitle="A clear roadmap from vision to installation">
        <ol className="steps">
          <li>
            <h4>Discovery & Brief</h4>
            <p>We align on your goals, style, budget, and timeline to set the direction.</p>
          </li>
          <li>
            <h4>Concept & Design</h4>
            <p>Layouts, moodboards, material palettes, and 3D previews to validate the concept.</p>
          </li>
          <li>
            <h4>Procurement & Installation</h4>
            <p>We coordinate vendors and on-site styling to bring the design to life.</p>
          </li>
        </ol>
      </Section>

      <Section title="Packages" subtitle="Flexible options to fit your scope">
        <div className="card-grid">
          <div className="price-card">
            <div className="pc-head">
              <span className="badge">Starter</span>
              <h3>Room Refresh</h3>
              <p className="price">From $200</p>
            </div>
            <ul>
              <li>1 moodboard + shopping list</li>
              <li>Color & materials guidance</li>
              <li>1 revision</li>
            </ul>
            <button className="btn" style={{ width: '100%' }}>Get started</button>
          </div>
          <div className="price-card featured">
            <div className="pc-head">
              <span className="badge">Popular</span>
              <h3>Full Room Design</h3>
              <p className="price">From $500</p>
            </div>
            <ul>
              <li>Layout plan + 3D concept</li>
              <li>Shopping list + vendor list</li>
              <li>2 revisions</li>
            </ul>
            <button className="btn" style={{ width: '100%' }}>Book now</button>
          </div>
          <div className="price-card">
            <div className="pc-head">
              <span className="badge">Premium</span>
              <h3>Turnkey</h3>
              <p className="price">Custom</p>
            </div>
            <ul>
              <li>End-to-end project management</li>
              <li>Custom sourcing & styling</li>
              <li>On-site installation</li>
            </ul>
            <button className="btn" style={{ width: '100%' }}>Request quote</button>
          </div>
        </div>
      </Section>

      <Section title="FAQ">
        <div className="faq">
          <details>
            <summary>How long does a typical project take?</summary>
            <p>Small rooms can complete in 2–4 weeks; full homes or commercial spaces may range from 8–16 weeks depending on scope and availability.</p>
          </details>
          <details>
            <summary>Do you work remotely?</summary>
            <p>Yes. We offer virtual consultations and remote design packages tailored to your location.</p>
          </details>
          <details>
            <summary>Can you work within my budget?</summary>
            <p>Absolutely. We right-size the scope and material selections to meet your budget while keeping the design intent intact.</p>
          </details>
        </div>
      </Section>
    </>
  )
}
