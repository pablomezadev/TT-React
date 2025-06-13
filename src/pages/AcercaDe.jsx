import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

function AcercaDe() {
  return (
    <>
      <Header />
      <main>
        <section className='cabecera-section'>
          <h1>Acerca de</h1>
          <p>Esta es una tienda de productos de prueba.</p>
          <p>Desarrollada por Pablo en 2025.</p>
          <p>Para más información, visita nuestro sitio web.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AcercaDe