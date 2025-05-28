import React from 'react'
import './styles/styleCart.css'

function Cart({ cartItems, isCartOpen, onClose, borrarProducto, vaciarCarrito }) {
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
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
                        (
                        <ul className='cart-list'>
                            {
                                cartItems.map((item, index) => (
                                    <>
                                        <li className='cart-item' key={item.id}>
                                            <div className='img-item'>
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className='item-info'>
                                                {item.title} - $ {item.price} - cant: {item.rating.count}
                                            </div>
                                            <button onClick={() => borrarProducto(item)} className='delete-btn'>
                                                <li className='fa-solid fa-trash'></li>
                                            </button>
                                        </li>

                                    </>
                                ))
                                
                            }
                            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </ul>
                        )
                }
            </div>
        </div>
    )
}

export default Cart