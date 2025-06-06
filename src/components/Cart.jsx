import { useState } from 'react'
import './styles/styleCart.css'
import CartIcon from './icons/CartIcon'
import { Link } from 'react-router-dom'

function Cart({ cartItems, isCartOpen, onClose, borrarProducto, vaciarCarrito, precioTotal, actualizarCantidad }) {
    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
    console.log('valor isCartOpen: ', isCartOpen)
    const [cantidadCart, setCantidadCart] = useState(1);

    // const increase = (item) => setCantidadCart(prev => (prev < item.rating.count ? prev + 1 : prev));
    // const increase = (item) => {
    //     if (item.cantidad < item.rating.count) {
    //         actualizarCantidad(item, item.cantidad + 1);
    //     }
    // };
const increase = (item) => item.cantidad < item.rating.count ? actualizarCantidad(item, item.cantidad + 1) : null;
const decrease = (item) => item.cantidad > 1 ? actualizarCantidad(item, item.cantidad - 1) : null;


    // const decrease = (item) => {
    //     if (item.cantidad > 1) {
    //         actualizarCantidad(item, item.cantidad - 1);
    //     }
    // };


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
                                                    <p style={{color:'black'}}>{item.title.split(" ")[0] + " " + item.title.split(" ")[1] + " " + item.title.split(" ")[2]}</p>
                                                    <li className='cart-item' key={item.id}>
                                                        <div className='img-item'>
                                                            <img src={item.image} alt={item.title} />
                                                        </div>
                                                        <div className='item-info'>
                                                            {/* <p>{item.title.split(" ")[0] + " " + item.title.split(" ")[1] + " " + item.title.split(" ")[2]}</p>  */}
                                                            <b><p> $ {item.price}</p></b> 
                                                            {/* <p>cant: {item.cantidad}</p> */}
                                                        </div>

                                                        <div className='cantidadContainer'>
                                                            <button className='qtyButton' onClick={() => decrease(item)}>-</button>
                                                            {/* <span>{cantidad}</span> */}
                                                            <span style={{ color: 'black' }}>{item.cantidad}</span>
                                                            <button className='qtyButton' onClick={() => increase(item)}>+</button>
                                                        </div>
                                                        <div className='delete-btn'>
                                                        <button onClick={() => borrarProducto(item)} >
                                                            <li className='fa-solid fa-trash'></li>
                                                        </button>
                                                        </div>

                                                    </li>

                                                </div>
                                            </>
                                        ))

                                    }
                                    {/* <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}
                                </ul>
                                <button style={{ backgroundColor: "red", color: "white" }} onClick={vaciarCarrito}>Vaciar Carrito</button>
                                <div className='cart-footer'>
                                    <div>
                                        <p style={{ color: "black" }}><b>Total: </b></p>
                                    </div>
                                    <div>
                                        <p style={{ color: "black" }}><b>$ {precioTotal}</b> </p>
                                    </div>
                                </div>
                                <Link style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }} to="/admin"><button style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }}><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button></Link>
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