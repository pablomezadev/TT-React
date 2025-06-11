import React from 'react'
import './style/Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = ({onClose}) => {
    const { cart, borrarUnProducto, vaciarCarrito, isCartOpen, setCartOpen, precioTotal  } = useContext(CartContext)

    const estilos = { listStyle: 'none' }
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'

    return (
        <div className={`cart-overlay-${isCartOpen ? 'open' : 'close'}`} onClick={()=>setCartOpen(false)}>
            <div className={`cart-drawer ${visibilidadCarrito}`} onClick={(e) => e.stopPropagation()}> {/*style={ visibilidadCarrito} */}
                <h2>Carrito de compras</h2>
                <button onClick={()=>setCartOpen(false)}><li className="fa-solid fa-arrow-left"></li></button>
                {
                    cart.length === 0 ? (<p>No hay productos</p>) :
                        (
                            <>
                                <ul style={estilos}>
                                    {
                                        cart.map((item, index) => (
                                            <li key={index} >{item.nombre} - ${item.precio} - cant: {item.cantidad}
                                                <button onClick={() => borrarUnProducto(item)}><li className='fa-solid fa-trash'></li></button>
                                            </li>
                                        ))
                                    }
                                    <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>
                                </ul>
                                
                            </>
                        )
                }
                <p>Total: {precioTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart