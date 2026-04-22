import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const imagenes = [
  { id: 1, titulo: 'Bonsái Junípero', desc: 'Estilo informal vertical' },
  { id: 2, titulo: 'Bonsái Ficus', desc: 'Estilo cascada' },
  { id: 3, titulo: 'Bonsái Olmo', desc: 'Estilo escoba' },
  { id: 4, titulo: 'Bonsái Pino', desc: 'Estilo formal vertical' },
  { id: 5, titulo: 'Bonsái Azalea', desc: 'Estilo inclinado' },
  { id: 6, titulo: 'Bonsái Maple', desc: 'Estilo bosque' },
]

function Gallery() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <p style={styles.subtitle}>Nuestra colección</p>
        <h1 style={styles.title}>Galería</h1>
        <div style={styles.grid}>
          {imagenes.map((img) => (
            <div key={img.id} style={styles.card}>
              <div style={styles.img}></div>
              <h3 style={styles.cardTitle}>{img.titulo}</h3>
              <p style={styles.cardDesc}>{img.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf7f4' },
  main: { flex: 1, padding: '4rem 3rem' },
  subtitle: { color: '#7a9e7e', fontSize: '0.9rem', letterSpacing: '2px',
    textTransform: 'uppercase', marginBottom: '0.5rem', textAlign: 'center' },
  title: { fontSize: '2rem', color: '#2d2d2d', fontWeight: '300',
    marginBottom: '3rem', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' },
  card: { backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  img: { width: '100%', height: '200px', backgroundColor: '#e8e0d5' },
  cardTitle: { padding: '1rem 1rem 0.3rem', color: '#2d2d2d', fontWeight: '400', margin: 0 },
  cardDesc: { padding: '0 1rem 1rem', color: '#888', fontSize: '0.85rem', margin: 0 },
}

export default Gallery