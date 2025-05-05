import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
// import { productList } from '../utils/data'
import ProductList from '../components/ProductList'
import { productList } from '../utils/data'
import Cart from '../components/Cart'

const Home = ({cart, handleAddToCart, borrarUnProducto,vaciarCarrito, isCartOpen, setCartOpen}) => {
    const countItem = cart
    return (
        <>
            <Header />
            <Nav countItem={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen}/>
            <Main data={productList}/>
            <ProductList products={productList} addToCart={handleAddToCart}/>
            <Cart cartItems={cart}/>
            <Footer />
        </>
    )
}

export default Home