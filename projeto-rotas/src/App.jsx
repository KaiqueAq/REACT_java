import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Servico from './pages/Servico'
import TrabalheConosco from './pages/TrabalheConosco'


function App() {


  return (
   <>
   <div>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre-nos' element={<SobreNos />}/>
        <Route path='/fale-conosco' element={<FaleConosco />}/>
        <Route path='/serviço' element={<Servico/>}/>
        <Route path='/Trabalhe-consco' element={<TrabalheConosco />}/>

      </Routes>
    </main>
    <Footer />
   </div>
   </>
  )
}

export default App
