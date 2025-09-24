import { Link } from 'react-router-dom'

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <Link to="/" aria-label="Shadow Interior Home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b1f3a" />
            <stop offset="100%" stopColor="#153a6b" />
          </linearGradient>
        </defs>
        <rect x="4" y="18" width="56" height="36" rx="8" fill="url(#g)" />
        <rect x="10" y="24" width="20" height="24" rx="4" fill="#fff" opacity="0.9" />
        <path d="M10 24 L30 24 L32 20 L8 20 Z" fill="#ff7a00" />
        <circle cx="50" cy="34" r="8" fill="#ff7a00" opacity="0.9" />
      </svg>
      <span style={{ fontWeight: 900, color: 'var(--navy)', letterSpacing: 0.2 }}>Shadow <span style={{ color: 'var(--orange)' }}>Interior</span></span>
    </Link>
  )
}
