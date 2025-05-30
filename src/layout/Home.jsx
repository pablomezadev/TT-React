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

const Home = ({error, cargando,productos,cart, handleAddToCart, borrarUnProducto,vaciarCarrito, isCartOpen, setCartOpen}) => {
    const countItem = cart

    if(error){
        return<NotFound/>
    }

    return (
        <>
            <Header />
            <Nav countItem={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen}/>
            <Main productos={productos} carga={cargando}/>
            {cargando? <img src={loading} alt="loading" />:
                <ProductList products={productos} addToCart={handleAddToCart} borrarUnProducto={borrarUnProducto}/>
            }
            <Cart cartItems={cart}/>
            <Footer />
        </>
    )
}

export default Home