import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import NotFound from '../pages/NotFound'
import Spinner from '../components/spinner'
import '../pages/styles/pages.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


function Home() {
  const { cargando,error } = useContext(CartContext)
  if (error) {
    return <NotFound />
  }
  return (
    <>
      <Header />
      <main>
        <section  className="cabecera-section">
          <h1>Home</h1>
          <p>descripcion de productos</p>
          <p>Bienvenido a nuestra tienda online. Aquí encontrarás una variedad de productos de alta calidad.</p>
        </section>

        {
          cargando ? <Spinner size={100} /> :
            <ProductList />
        }
      </main>
      <Footer />
    </>
  )
}

export default Home