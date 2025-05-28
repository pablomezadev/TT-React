import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

function Contactos({cart, borrarProducto, vaciarCarrito}) {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
        <h1>Contactos</h1>
        <p>
          Para consultas, envíanos un correo a:
        </p>
        <Footer/>
    </>
  )
}

export default Contactos