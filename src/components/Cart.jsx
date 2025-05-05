import React from 'react'
import './style/Cart.css'

const Cart = ({ cartItems, borrarUnProducto, vaciarCarrito,isCartOpen, onClose }) => {
    const estilos = { listStyle: 'none' }
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
    // console.log(`cantidad de productos: ${cartItems.length}`)
    console.log('valor isCartOpen: ', isCartOpen)

    return (
        <div className={`cart-overlay-${isCartOpen?'open':'close'}`} onClick={onClose}>
            <div className={`cart-drawer ${visibilidadCarrito}`} onClick={(e) => e.stopPropagation()}> {/*style={ visibilidadCarrito} */}
                <h2>Carrito de compras</h2>
                <button onClick={onClose}><li className="fa-solid fa-arrow-left"></li></button>
                {
                    cartItems.length === 0 ? (<p>No hay productos</p>) :
                        (<ul style={estilos}>
                            {
                                cartItems.map((item, index) => (
                                    <li >{item.nombre} - ${item.precio} - cant: {item.cant}
                                        <button onClick={() => borrarUnProducto(item)}><li className='fa-solid fa-trash'></li></button>
                                    </li>
                                ))
                            }
                        </ul>

                      )
                }
                <button onClick={()=>{vaciarCarrito()}}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart