import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './styleEstaticos.css'  
import Cart from '../Cart'

function Header({cartItems, borrarProducto}) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/acercade'>Sobre nosotros</Link></li>
                <li><Link to='/productos'>Galeria de productos</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
                <li>
                    <button onClick={() => setIsCartOpen(true)} >
                        <i className={`fa-solid fa-cart-shopping ${isCartOpen ? 'open' : 'close'}`}> {cartItems.length}</i>
                    </button>
                    <Cart borrarProducto={borrarProducto} cartItems={cartItems} isCartOpen={isCartOpen} onClose={()=>setIsCartOpen(false)}/>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header