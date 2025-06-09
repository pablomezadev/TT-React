import { useContext} from 'react'
import './EstilosGenerales.css'
import Home from './layout/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contacto from './layout/Contacto'
import ProductList from './components/ProductList'
import NotFound from './components/NotFound'
import AcercaDe from './layout/AcercaDe'
import DetallesProductos from './components/DetallesProductos'
import RutaProtegida from './auth/RutaProtegida'
import Login from './layout/Login'
import Admin from './layout/Admin'
import {CartContext} from './context/CartContext.jsx'
import GaleriaProductos from './layout/GaleriaProductos.jsx'

function App() {

  const {
            cart,
            setToCart,
            isCartOpen,
            setCartOpen,
            productos,
            cargando,
            error,
            precioTotal,
            handleAddToCart,
            borrarUnProducto,
            vaciarCarrito,
            sumaTotal,
            isAuthenticated, 
            setIsAuthenticated
          } = useContext(CartContext);

  return (
    <>
        <Routes >
          <Route path="/" element={<Home error={error} cargando={cargando} productos={productos} cart={cart} handleAddToCart={handleAddToCart} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen} precioTotal={precioTotal} />} />
          <Route path="/galeriadeproductos" element={<GaleriaProductos products={productos} addToCart={handleAddToCart} />} />
          <Route path="/productos/:id" element={<DetallesProductos productos={productos}/>} />

          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto error={error} cargando={cargando} productos={productos} cart={cart} handleAddToCart={handleAddToCart} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen} precioTotal={precioTotal} />} />

          <Route 
            path="/admin" 
            element={ <RutaProtegida isAuthenticated={isAuthenticated}> <Admin /></RutaProtegida>} />
          <Route path="/login" element={ <Login /> }/>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
