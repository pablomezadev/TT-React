import { useState, useEffect, useContext } from 'react'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Home = () => {
    const { cargando } = useContext(CartContext);

    return (
        <>
            <Header />
            <Nav />
            <main>
                <h1>Home</h1>
                {cargando ? <img src={loading} alt="loading" /> :
                    <ProductList />
                }
                <Cart />
            </main>
            <Footer />
        </>
    )
}

export default Home