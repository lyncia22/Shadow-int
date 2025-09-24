export function About() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>About Shadow Interior</h1>
          <p>Designing meaningful spaces with precision, warmth, and a touch of drama.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1.2fr 1fr' }}>
          <div>
            <h2>Our Philosophy</h2>
            <p style={{ color: 'var(--muted)' }}>
              We believe great design is both functional and emotive. Our process prioritizes understanding your story and translating it into a cohesive space that performs beautifully.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              From materiality to lighting, we obsess over details to create environments that feel effortlessly curated.
            </p>
          </div>
          <div>
            <img src="/logo.svg" alt="Shadow Interior" width={320} height={320} />
          </div>
        </div>
      </section>
    </>
  )
}
