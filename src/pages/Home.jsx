import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import NotFound from '../pages/NotFound'
import Spinner from '../components/spinner'


function Home({ cart, productos, cargando, agregarCarrito, borrarProducto, vaciarCarrito, error}) {
  if(error){
    return <NotFound/>
  }
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>
      <h1>Home</h1>
      <p>descripcion de productos</p>
      <p>Bienvenido a nuestra tienda online. Aquí encontrarás una variedad de productos de alta calidad.</p>
      {
        cargando?<Spinner size={100}/>:
        <ProductList productos={productos} agregarCarrito={agregarCarrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>
      }
      <Footer />
    </>
  )
}

export default Home