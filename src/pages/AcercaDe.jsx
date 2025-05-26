import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

function AcercaDe({cart, borrarProducto}) {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto}/>
      <h1>Acerca de</h1>
      <p>Esta es una tienda de productos de prueba.</p>
      <p>Desarrollada por [Tu Nombre] en [Fecha].</p>
      <p>Para más información, visita nuestro sitio web.</p>
      <Footer />
    </>
  )
}

export default AcercaDe