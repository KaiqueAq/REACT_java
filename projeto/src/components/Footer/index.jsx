import './styles.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Meu Projeto</p>
    </footer>
  )
}

export default Footer
