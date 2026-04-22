import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>Zenith Bonsai</Link>
      <div style={styles.links}>
        <Link to="/philosophy" style={styles.link}>Filosofía</Link>
        <Link to="/gallery" style={styles.link}>Galería</Link>
        <Link to="/booking" style={styles.link}>Reservas</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.2rem 3rem', backgroundColor: '#fff', borderBottom: '1px solid #e8e0d5' },
  logo: { fontSize: '1.3rem', fontWeight: 'bold', color: '#3d5a3e',
    textDecoration: 'none', letterSpacing: '1px' },
  links: { display: 'flex', gap: '2rem' },
  link: { color: '#555', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.5px' },
}

export default Navbar