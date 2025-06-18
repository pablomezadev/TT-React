import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styleEstaticos.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext';
// import {aseAuth} from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext'

// function Header({ cartItems, borrarProducto, vaciarCarrito, precioTotal, actualizarCantidad }) {
function Header() {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext)
    const { logOut } = useAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'> Inicio</NavLink></li>
                    <li><NavLink to='/acercade'>Sobre nosotros</NavLink></li>
                    <li><NavLink to='/productos'>Galeria de productos</NavLink></li>
                    <li><NavLink to='/contacto'>Contacto</NavLink></li>
                    <li className="nav-item" onClick={() => logOut()}>
                        {/* <NavLink className="link" to="/login" > */}
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/login" >
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => logOut()}>
                        <NavLink className="link" to="/admin" >
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