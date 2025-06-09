import { useState, useEffect } from 'react'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
// import { productList } from '../utils/data'
import ProductList from '../components/ProductList'
// import { productList } from '../utils/data'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'

const Home = ({ error, cargando, productos, cart, handleAddToCart, borrarUnProducto, vaciarCarrito, isCartOpen, setCartOpen, precioTotal }) => {
    const countItem = cart

    if (error) {
        return <NotFound />
    }

    return (
        <>
            <Header />
            <Nav precioTotal={precioTotal} countItem={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
            {/* <Main productos={productos} carga={cargando} /> */}
            <main>
                <h1>Home</h1>
            {cargando ? <img src={loading} alt="loading" /> :
                <ProductList products={productos} addToCart={handleAddToCart} borrarUnProducto={borrarUnProducto} />
            }
            <Cart onClose={() => setCartOpen(false)} isCartOpen={isCartOpen} vaciarCarrito={vaciarCarrito} cartItems={cart} precioTotal={precioTotal} borrarUnProducto={borrarUnProducto}/>
            </main>
            <Footer />
        </>
    )
}

export default Home