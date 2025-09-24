import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="badge">Premium Interior Design</span>
        <h1>Elevate your space with timeless design</h1>
        <p>
          We craft functional, beautiful interiors tailored to your lifestyle. From concept to completion, we bring your vision to life with a refined palette and meticulous detail.
        </p>
        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <Link className="btn" to="/portfolio">View Portfolio</Link>
          <Link className="btn outline" to="/contact">Book a Consultation</Link>
        </div>
      </div>
    </section>
  )
}
