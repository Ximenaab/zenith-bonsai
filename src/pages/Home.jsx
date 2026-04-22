import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.hero}>
        <p style={styles.subtitle}>El arte de la paciencia</p>
        <h1 style={styles.title}>Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.</h1>
        <p style={styles.desc}>Un espacio para reconectar con la naturaleza.</p>
        <Link to="/booking" style={styles.btn}>Reserva un taller</Link>
      </main>
      <Footer />
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf7f4' },
  hero: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center', padding: '6rem 2rem', gap: '1.5rem' },
  subtitle: { color: '#7a9e7e', fontSize: '0.95rem', letterSpacing: '2px',
    textTransform: 'uppercase', margin: 0 },
  title: { fontSize: '2.2rem', color: '#2d2d2d', maxWidth: '600px',
    lineHeight: '1.4', margin: 0, fontWeight: '300' },
  desc: { color: '#777', fontSize: '1rem', margin: 0 },
  btn: { marginTop: '1rem', padding: '0.9rem 2rem', backgroundColor: '#3d5a3e',
    color: '#fff', textDecoration: 'none', borderRadius: '2px', fontSize: '0.9rem',
    letterSpacing: '1px' },
}

export default Home