import { useMemo, useState } from 'react'
import { Section } from '@components/Section'
import { PortfolioCard } from '@components/PortfolioCard'
import { portfolio } from '@data/portfolio'

export function Portfolio() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<'All' | string>('All')

  const tags = useMemo(() => {
    const t = Array.from(new Set(portfolio.map(p => p.tag)))
    return ['All', ...t]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return portfolio.filter(p => {
      const matchesTag = tag === 'All' || p.tag === tag
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      return matchesTag && matchesQuery
    })
  }, [query, tag])

  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Portfolio</h1>
          <p>A curated collection of our recent projects.</p>
        </div>
      </div>
      <Section title="Projects">
        <div className="container" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {tags.map(t => (
              <button
                key={t}
                className="btn"
                onClick={() => setTag(t)}
                style={{ background: tag === t ? 'var(--orange)' : '#fff', color: tag === t ? '#fff' : 'var(--navy)', border: '1px solid #e5e7eb' }}
              >
                {t}
              </button>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              placeholder="Search projects..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ maxWidth: 260 }}
            />
          </div>
        </div>
        <p className="container" style={{ color: 'var(--muted)', margin: '8px 0 16px' }}>{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
        <div className="card-grid">
          {filtered.map(p => (
            <PortfolioCard key={p.id} item={p} />
          ))}
        </div>
      </Section>
    </>
  )
}
