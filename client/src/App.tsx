import { Outlet, NavLink } from 'react-router-dom'
import { Logo } from '@components/Logo'
import { Footer } from '@components/Footer'

export function App() {
  return (
    <div>
      <header className="header">
        <div className="container nav">
          <Logo />
          <nav style={{ marginLeft: 'auto', display: 'flex' }}>
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} style={{ padding: '8px 10px' }}>Home</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''} style={{ padding: '8px 10px' }}>Services</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''} style={{ padding: '8px 10px' }}>Portfolio</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} style={{ padding: '8px 10px' }}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} style={{ padding: '8px 10px' }}>Contact</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
