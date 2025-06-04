import React from 'react'
import Formulario from '../components/Formulario'
import Header from '../components/Header'
import Nav from '../components/Nav'
import './style/Contacto.css'

const Contacto = ({error, cargando, productos, cart, handleAddToCart, borrarUnProducto, vaciarCarrito, isCartOpen, setCartOpen, precioTotal }) => {
    const countItem = cart

    if (error) {
        return <NotFound />
    }
    return (
        <>
        
        <Header />
        <Nav precioTotal={precioTotal} countItem={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen}/>
        <div className="pageContainer">
        <h2>Contacto</h2>
        <Formulario />
        </div>
        </>
    )
}

export default Contacto