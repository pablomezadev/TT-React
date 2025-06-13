import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styleEstaticos.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext';

// function Header({ cartItems, borrarProducto, vaciarCarrito, precioTotal, actualizarCantidad }) {
function Header() {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    const {cart, isCartOpen, setIsCartOpen} = useContext(CartContext)

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'> Inicio</Link></li>
                    <li><Link to='/acercade'>Sobre nosotros</Link></li>
                    <li><Link to='/productos'>Galeria de productos</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                    <li className="nav-item">
                        <NavLink className="link" to="/login">
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="link" to="/admin">
                            <i className="fa-solid fa-user-tie"></i>
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => setIsCartOpen(true)} >
                            <i className={`fa-solid fa-cart-shopping ${isCartOpen ? 'open' : 'close'}`}> {cart.length}</i>
                        </button>
                        <Cart />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header