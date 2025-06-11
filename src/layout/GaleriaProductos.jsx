import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'  
import Header from '../components/Header'
import Nav from '../components/Nav'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'
import loading from '../assets/loading.gif'

function GaleriaProductos({addToCart, products, borrarUnProducto}) {
const { productos, error,cart,cargando, handleDeleteFromCart, vaciarCarrito, 
        isCartOpen, setCartOpen, precioTotal
        } = useContext(CartContext)

    if (error) {
        return <NotFound />
    }

    return (
        <>
            <Header />
            <Nav />
            {/* <Main productos={productos} carga={cargando} /> */}
            <main>
                <h1>Galeria de productos</h1>
            {cargando ? <img src={loading} alt="loading" /> :
                <ProductList products={productos} addToCart={addToCart} borrarUnProducto={borrarUnProducto} />
            }
            <Cart onClose={() => setCartOpen(false)} isCartOpen={isCartOpen} vaciarCarrito={vaciarCarrito} cartItems={cart} precioTotal={precioTotal} borrarUnProducto={borrarUnProducto}/>
            </main>
            <Footer />
        </>
    )
}

export default GaleriaProductos