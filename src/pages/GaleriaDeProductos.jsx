import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Loading from '../pages/Loading'

function GaleriaDeProductos({cart, productos, cargando, agregarCarrito, borrarProducto}) {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto}/>
      <h2>Galería de Productos</h2>
      <p>Bienvenido a nuestra galería de productos. Aquí encontrarás una variedad de artículos disponibles para la venta.</p>
      <p>Explora nuestra colección y encuentra lo que más te gusta.</p>
      <p>Para más información, visita nuestro sitio web o contáctanos.</p>
      {
        cargando ? <Loading /> :
          <ProductList productos={productos} agregarCarrito={agregarCarrito} borrarProducto={borrarProducto}/>
      }
      <Footer />
    </>
  )
}

export default GaleriaDeProductos