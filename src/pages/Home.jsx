import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Loading from '../pages/Loading'

function Home({ cart, productos, cargando }) {
  return (
    <>
      <Header cartItems={cart}/>
      <h1>Home</h1>
      <p>descripcion de productos</p>
      <p>Bienvenido a nuestra tienda online. Aquí encontrarás una variedad de productos de alta calidad.</p>
      {
        cargando?<Loading/>:
        <ProductList productos={productos}/>
      }
      <Footer />
    </>
  )
}

export default Home