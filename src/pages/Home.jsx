import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import NotFound from '../pages/NotFound'
import Spinner from '../components/spinner'
import '../pages/styles/pages.css'


function Home({ cart, productos, cargando, agregarCarrito, borrarProducto, vaciarCarrito, error, precioTotal,actualizarCantidad }) {
  if (error) {
    return <NotFound />
  }
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} precioTotal={precioTotal} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad}/>
      <main>
        <section  className="cabecera-section">
          <h1>Home</h1>
          <p>descripcion de productos</p>
          <p>Bienvenido a nuestra tienda online. Aquí encontrarás una variedad de productos de alta calidad.</p>
        </section>

        {
          cargando ? <Spinner size={100} /> :
            <ProductList cart={cart} productos={productos} agregarCarrito={agregarCarrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
        }
      </main>
      <Footer />
    </>
  )
}

export default Home