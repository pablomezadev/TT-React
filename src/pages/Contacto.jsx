import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'
import '../pages/styles/pages.css'

function Contacto({ cart, borrarProducto, vaciarCarrito, precioTotal }) {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} precioTotal={precioTotal} />
      <main>
        <section className='cabecera-section'>
          <h1>Contacto</h1>
          <p>
            Para consultas, envíanos un correo a:
          </p>
        </section>
        <Formulario />
      </main>
      <Footer />
    </>
  )
}

export default Contacto