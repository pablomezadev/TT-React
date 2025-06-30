import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import NotFound from '../pages/NotFound'
import Spinner from '../components/Spinner'
import '../pages/styles/pages.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import Carrousel from '../components/Carrousel'
import NavBarML from '../components/estaticos/NavBarML'
import ScrollFadeIn from '../components/utils/ScrollFadeIn'


function Home() {
  const { cargando, error } = useContext(CartContext)
  if (error) {
    return <NotFound />
  }
  return (
    <>
      <Header />
      {/* <NavBarML /> */}
      <main>
        <ScrollFadeIn>
          <section className="cabecera-section" >
            {/* <h3>Home</h3>
          <p>Bienvenido a nuestra tienda online. Aquí encontrarás una variedad de productos de alta calidad.</p> */}
            {/* <ScrollFadeIn> */}
            <Carrousel />
            {/* </ScrollFadeIn> */}
          </section>

          {
            cargando ? <Spinner size={100} /> :

              <ProductList />

          }
        </ScrollFadeIn>
      </main>
      <Footer />

    </>
  )
}

export default Home