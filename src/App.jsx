import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetallesProductos'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'
import Login from './pages/Login'
import { CartContext } from './context/CartContext'

function App() {
 const { 
  handleDeleteFromCart, 
  handleVaciarCarrito, 
  handleAddToCart, 
  cart,
  productos,
  cargando,
  error,
  precioTotal,
  actualizarCantidad,
  isAuthenticated,
  setIsAuthenticated
  } = useContext(CartContext);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} error={error} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />
        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />
        <Route path="/productos/:id" element={<DetallesProductos productos={productos}/>} />
        <Route path='/contacto' element={<Contacto precioTotal={precioTotal} borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} actualizarCantidad={actualizarCantidad}/>} />
        
        <Route path="/admin" 
          element={ 
            <RutaProtegida isAuthenticated={isAuthenticated}> 
              <Admin />
            </RutaProtegida>
            } 
        />
        <Route path="/login" element={ <Login setIsAuthenticated={setIsAuthenticated}/> }/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
