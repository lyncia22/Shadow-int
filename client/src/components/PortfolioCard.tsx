import { Link } from 'react-router-dom'
export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  tag: string;
  description: string;
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link to={`/portfolio/${item.id}`} className="card" aria-label={`${item.title} details`}>
      <img src={item.image} alt={item.title} />
      <div className="body">
        <span className="badge">{item.tag}</span>
        <h3 style={{ margin: '8px 0 6px', color: 'var(--navy)' }}>{item.title}</h3>
        <p style={{ color: 'var(--muted)' }}>{item.description}</p>
      </div>
    </Link>
  )
}
