import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)


useEffect(()=>{
  fetch('/data/data.json')
  .then(respuesta=>respuesta.json())
  //logica para manejar los datos
  .then(datos => {
    setTimeout(()=>{
      setProductos(datos)
      setCargando(false)
    },2000)
  })
  .catch(error=>{
    console.log("Error al intentar obtener productos: ",error)
    setCargando(false)
    setError(true)
  })
},[])

console.log(productos);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home cart={cart} productos={productos} cargando={cargando}/>}/>

        <Route path='/acercade' element={<AcercaDe cart={cart}/>}/>
        <Route path='/productos' element={<GaleriaDeProductos cart={cart} productos={productos} cargando={cargando}/>}/>
        <Route path='/contacto' element={<Contacto cart={cart}/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
