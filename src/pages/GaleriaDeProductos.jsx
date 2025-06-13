import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/spinner'
import '../pages/styles/pages.css'
import { CartContext } from '../context/CartContext'

function GaleriaDeProductos() {
  const {cargando}=useContext(CartContext)

  return (
    <>
      <Header />
      <main>
        <section className='cabecera-section'>
          <h1>Galería de Productos</h1>
          <p>Bienvenido a nuestra galería de productos. Aquí encontrarás una variedad de artículos disponibles para la venta.</p>
          <p>Explora nuestra colección y encuentra lo que más te gusta.</p>
          <p>Para más información, visita nuestro sitio web o contáctanos.</p>
        </section>
        {
          cargando ? <Spinner /> :
            <ProductList />
        }
      </main>
      <Footer />
    </>
  )
}

export default GaleriaDeProductos