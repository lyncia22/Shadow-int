export function Footer() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, color: 'var(--navy)' }}>Shadow Interior</span>
        <div style={{ display: 'flex', gap: 12, color: 'var(--muted)' }}>
          <a href="mailto:hello@shadowinterior.example">hello@shadowinterior.example</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
        </div>
      </div>
      <small style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Shadow Interior. All rights reserved.</small>
    </div>
  )
}
