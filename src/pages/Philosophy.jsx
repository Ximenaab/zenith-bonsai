import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Philosophy() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <p style={styles.subtitle}>Menos es más</p>
        <h1 style={styles.title}>Nuestra Filosofía</h1>
        <p style={styles.text}>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
          Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
        </p>
        <p style={styles.text}>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y
          cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la
          intervención humana y la expresión salvaje de la naturaleza.
        </p>
      </main>
      <Footer />
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf7f4' },
  main: { flex: 1, maxWidth: '700px', margin: '0 auto', padding: '5rem 2rem' },
  subtitle: { color: '#7a9e7e', fontSize: '0.9rem', letterSpacing: '2px',
    textTransform: 'uppercase', marginBottom: '0.5rem' },
  title: { fontSize: '2rem', color: '#2d2d2d', fontWeight: '300',
    marginBottom: '2rem' },
  text: { color: '#666', lineHeight: '1.9', fontSize: '1rem', marginBottom: '1.5rem' },
}

export default Philosophy