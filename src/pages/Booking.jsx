import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Booking() {
  const [form, setForm] = useState({ nombre: '', email: '', nivel: '', mensaje: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.nivel) {
      alert('Por favor completa los campos obligatorios.')
      return
    }
    localStorage.setItem('reserva', JSON.stringify(form))
    console.log('Reserva enviada:', form)
    alert('¡Solicitud enviada! Nos pondremos en contacto contigo.')
    setForm({ nombre: '', email: '', nivel: '', mensaje: '' })
  }

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <p style={styles.subtitle}>Únete a nosotros</p>
        <h1 style={styles.title}>Reserva un Taller</h1>
        <p style={styles.desc}>Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>

        <div style={styles.formContainer}>
          <input style={styles.input} name="nombre" placeholder="Nombre completo"
            value={form.nombre} onChange={handleChange} />
          <input style={styles.input} name="email" placeholder="Correo electrónico"
            type="email" value={form.email} onChange={handleChange} />
          <select style={styles.input} name="nivel" value={form.nivel} onChange={handleChange}>
            <option value="">Nivel de experiencia</option>
            <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
            <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
            <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
          </select>
          <textarea style={{ ...styles.input, height: '120px', resize: 'vertical' }}
            name="mensaje" placeholder="Mensaje (Opcional)"
            value={form.mensaje} onChange={handleChange} />
          <button style={styles.btn} onClick={handleSubmit}>Enviar Solicitud</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf7f4' },
  main: { flex: 1, maxWidth: '600px', margin: '0 auto', padding: '5rem 2rem', width: '100%' },
  subtitle: { color: '#7a9e7e', fontSize: '0.9rem', letterSpacing: '2px',
    textTransform: 'uppercase', marginBottom: '0.5rem' },
  title: { fontSize: '2rem', color: '#2d2d2d', fontWeight: '300', marginBottom: '1rem' },
  desc: { color: '#777', marginBottom: '2rem', lineHeight: '1.7' },
  formContainer: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', border: '1px solid #ddd', backgroundColor: '#fff',
    fontSize: '0.95rem', width: '100%', boxSizing: 'border-box',
    fontFamily: 'inherit', borderRadius: '2px' },
  btn: { padding: '1rem', backgroundColor: '#3d5a3e', color: '#fff', border: 'none',
    cursor: 'pointer', fontSize: '0.95rem', letterSpacing: '1px', borderRadius: '2px' },
}

export default Booking