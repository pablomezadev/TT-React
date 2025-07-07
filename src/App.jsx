import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetalleProducto'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'
import Login from './pages/Login'
import { CartContext } from './context/CartContext'
import DetalleDeProducto from './pages/DetalleDeProducto'
import Checkout from './pages/Checkout'

function App() {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acercade' element={<AcercaDe />} />
        <Route path='/productos' element={<GaleriaDeProductos />} />
        <Route path="/productos/:id" element={<DetalleDeProducto />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated} requiredRole="admin">
              <Admin />
            </RutaProtegida>
          }
        />

        <Route
          path="/checkout"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated} requiredRole="cliente">
              <Checkout />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
