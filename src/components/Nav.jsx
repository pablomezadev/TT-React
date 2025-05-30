import React from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const Nav = ({countItem, borrarUnProducto, vaciarCarrito, isCartOpen, setCartOpen}) => {
    const estilosUl = {listStyle:'none',display:'flex',margin:'0',alignItems:'center',justifyContent:'space-around'}
  return (
    // pasamos los estilos directamente como propiedad usando: {{}}
    <nav style={{backgroundColor:'#0f0c29',color:'white',padding:'10px'}}>
        <ul style={estilosUl}>
            <img src={logo} />
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acercade" >Acerca de </Link></li>
            <li><Link to="/contacto"> Contacto</Link></li>
            {/* <li className="fa-solid fa-cart-shopping" > {countItem.length} </li> */}
            <li>
                <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"> {countItem.length}</i></button>
                <Cart cartItems={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito}isCartOpen={isCartOpen} onClose={() => setCartOpen(false)}/> 
            </li> 
        </ul>
    </nav>
  )
}

export default Nav