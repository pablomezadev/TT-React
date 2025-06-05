import React from 'react'
import './styles/styleCart.css'
import CartIcon from './icons/CartIcon'

function Cart({ cartItems, isCartOpen, onClose, borrarProducto, vaciarCarrito, precioTotal }) {
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
    console.log('valor isCartOpen: ', isCartOpen)

    return (
        <div className={`cart-overlay-${visibilidadCarrito}`} onClick={onClose}>
            <div className={`cart-drawer ${visibilidadCarrito}`} onClick={(e) => e.stopPropagation()}>
                <div className='cart-header'>
                    <h2>Carrito</h2>
                    <button onClick={onClose}><li className="fa-solid fa-arrow-left"></li></button>
                    
                </div>
                {
                    cartItems.length === 0 ? (
                        <div className='empty-cart'>
                            {/* <button style={{color:"white"}}><li className="fa-solid fa-cart-shopping" ></li></button> */}
                            <CartIcon size={120} color="#555" />
                            <p style={{ color: 'red' }}><b>Tu carrito está vacio</b></p>  
                        </div>) :
                        (
                            <>
                                <ul className='cart-list'>
                                    {
                                        cartItems.map((item, index) => (
                                            <>
                                                <div className='cart-item-container' key={index}>
                                                <li className='cart-item' key={item.id}>
                                                    <div className='img-item'>
                                                        <img src={item.image} alt={item.title} />
                                                    </div>
                                                    <div className='item-info'>
                                                        {item.title.split(" ")[0]+" "+item.title.split(" ")[1]+" "+item.title.split(" ")[2]} - $ {item.price} - cant: {item.cantidad}
                                                    </div>
                                                    <button onClick={() => borrarProducto(item)} className='delete-btn'>
                                                        <li className='fa-solid fa-trash'></li>
                                                    </button>
                                                </li>
                                                </div>
                                            </>
                                        ))

                                    }
                                    {/* <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}
                                </ul>
                                <button style={{backgroundColor:"red",color:"white"}} onClick={vaciarCarrito}>Vaciar Carrito</button>
                                <div className='cart-footer'>
                                    <div>
                                        <p style={{ color: "black" }}><b>Total: </b></p>
                                    </div>
                                    <div>
                                        <p style={{ color: "black"}}><b>$ {precioTotal}</b> </p>
                                    </div>
                                </div>
                                <button style={{backgroundColor:"black",color:"white", height:"6%",fontSize:"1.2rem"}}><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button>
                            {/* <i class="fa-solid fa-bag-shopping"></i> */}
                            </>
                        )
                }

                {/* <div  className='cart-footer'>
                    <div>
                        <p style={{color:"black"}}><b>Total: </b></p>
                    </div>
                    <div> 
                    <p style={{color:"black"}}><b>$ {precioTotal}</b> </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Cart