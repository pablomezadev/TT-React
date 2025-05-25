import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/acercade' element={<AcercaDe/>}/>
        <Route path='/productos' element={<GaleriaDeProductos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
