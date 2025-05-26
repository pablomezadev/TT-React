import React from 'react'
import './styles/styleCart.css'

function Cart({cartItems, isCartOpen, onClose}) {
    const estilos = { listStyle: 'none' }
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
    // console.log(`cantidad de productos: ${cartItems.length}`)
    console.log('valor isCartOpen: ', isCartOpen)

    return (
        <div className={`cart-overlay-${visibilidadCarrito}`} onClick={onClose}>
            <div className={`cart-drawer ${visibilidadCarrito}`} onClick={(e) => e.stopPropagation()}>
                <div className='cart-header'>
                    <h2>Carrito de compras</h2>
                    <button onClick={onClose}><li className="fa-solid fa-arrow-left"></li></button>
                </div>
                {
                    cartItems.length === 0 ? (<p style={{ color: 'red' }}><b>No hay productos</b></p>) :
                        (<ul style={estilos}>
                            {
                                cartItems.map((item, index) => (
                                    <>
                                        <li key={index}>{item.nombre} - ${item.precio} - cant: {item.stock}
                                            <button onClick={() => borrarUnProducto(item)}><li className='fa-solid fa-trash'></li>
                                            </button>
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                        )
                }
                {/* <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button> */}
            </div>
        </div>
    )
}

export default Cart