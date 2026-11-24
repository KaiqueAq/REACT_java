import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UsuariosPage from './pages/UsuariosPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
