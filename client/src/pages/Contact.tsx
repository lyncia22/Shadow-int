import { ContactForm } from '@components/ContactForm'

export function Contact() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Tell us about your project. We usually respond within 1-2 business days.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h2>Start a conversation</h2>
            <p style={{ color: 'var(--muted)' }}>
              Fill out the form and we'll reach out to schedule a consultation.
            </p>
            <div style={{ marginTop: 16 }}>
              <ContactForm />
            </div>
          </div>
          <div>
            <h2>Contact details</h2>
            <p style={{ color: 'var(--muted)' }}>
              Email: hello@shadowinterior.example
              <br />
              Instagram: @shadowinterior
            </p>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="body">
                <span className="badge">Office</span>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>
                  123 Design Street
                  <br />
                  Cape Town, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
