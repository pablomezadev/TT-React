import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/spinner'

function GaleriaDeProductos({cart, productos, cargando, agregarCarrito, borrarProducto, vaciarCarrito}) {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>
      <h1>Galería de Productos</h1>
      <p>Bienvenido a nuestra galería de productos. Aquí encontrarás una variedad de artículos disponibles para la venta.</p>
      <p>Explora nuestra colección y encuentra lo que más te gusta.</p>
      <p>Para más información, visita nuestro sitio web o contáctanos.</p>
      {
        cargando ? <Spinner /> :
          <ProductList productos={productos} vaciarCarrito={vaciarCarrito} agregarCarrito={agregarCarrito} borrarProducto={borrarProducto}/>
      }
      <Footer />
    </>
  )
}

export default GaleriaDeProductos