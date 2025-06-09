import {useState, useContext} from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'
import Cart from './Cart'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Nav = () => {
  const {cart, borrarUnProducto, vaciarCarrito, isCartOpen, setCartOpen, precioTotal }= useContext(CartContext);
  
  const estilosUl = { listStyle: 'none', display: 'flex', margin: '0', alignItems: 'center', justifyContent: 'space-around' }
  const linkStyle = ({ isActive }) =>
    isActive
      ? { fontWeight: 'bold', color: 'yellow', textDecoration: 'underline' }
      : undefined;
  return (
    // pasamos los estilos directamente como propiedad usando: {{}}
    <nav style={{ backgroundColor: '#0f0c29', color: 'white', padding: '10px' }}>
      <ul style={estilosUl}>
        <img src={logo} />
        <li><NavLink to="/" style={linkStyle}>Inicio</NavLink></li>
        <li><NavLink to="/acercade"   style={linkStyle}>Acerca de </NavLink></li>
        <li><NavLink to="/contacto"   style={linkStyle}> Contacto</NavLink></li>
        <li><NavLink to="/galeriadeproductos"   style={linkStyle}> Galeria</NavLink></li>
        <li><NavLink to="/login"   style={linkStyle}> <i className="fa-solid fa-right-to-bracket"></i></NavLink></li>
        <li>
          <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"> {cart.length}</i></button>
          <Cart precioTotal={precioTotal} cartItems={cart} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} onClose={() => setCartOpen(false)} />
        </li>
      </ul>
    </nav>
  )
}

export default Nav