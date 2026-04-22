function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Zenith Bonsai Studio.</p>
    </footer>
  )
}

const styles = {
  footer: { backgroundColor: '#f5f0eb', borderTop: '1px solid #e8e0d5',
    padding: '2rem', textAlign: 'center' },
  text: { color: '#888', fontSize: '0.85rem', margin: 0 },
}

export default Footer