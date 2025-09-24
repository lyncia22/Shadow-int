export function Section({ title, children, subtitle }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p style={{ color: 'var(--muted)', marginTop: -6 }}>{subtitle}</p>}
        <div style={{ marginTop: 16 }}>{children}</div>
      </div>
    </section>
  )
}
