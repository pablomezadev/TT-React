import { useContext, useState } from 'react'
import './styles/styleCart.css'
import CartIcon from './icons/CartIcon'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext';
import { useFinalizarCompra } from '../hooks/useFinalizarCompra';
import Swal from 'sweetalert2';


// function Cart({ cartItems, isCartOpen, onClose, borrarProducto, vaciarCarrito, precioTotal, actualizarCantidad }) {
// function Cart({ isCartOpen, onClose }) {
function Cart() {
    const {
        cart, handleDeleteFromCart, handleVaciarCarrito,
        precioTotal, actualizarCantidad, isCartOpen, setIsCartOpen
    } = useContext(CartContext)

    const { isAuthenticated, user } = useAuth();
    const finalizarCompra = useFinalizarCompra();

    const visibilidadCarrito = isCartOpen ? 'open' : 'close'
    // console.log('valor isCartOpen: ', isCartOpen)
    const [cantidadCart, setCantidadCart] = useState(1);

    const increase = (item) => item.cantidad < item.stock ? actualizarCantidad(item, item.cantidad + 1) : null;
    const decrease = (item) => item.cantidad > 1 ? actualizarCantidad(item, item.cantidad - 1) : null;
    const navigate = useNavigate();

    // const handleFinalizarCompra = () => {
    //     // Siempre cerramos el carrito
    //     setIsCartOpen(false);

    //     if (!isAuthenticated) {
    //         // Guardamos intención de ir a checkout para después del login
    //         localStorage.setItem('postLoginRedirect', '/checkout');
    //         navigate('/login');
    //         return;
    //     }

    //     if (user?.rol === 'cliente') {
    //         navigate('/checkout');
    //     } else {
    //         // Si es admin y clickea "Finalizar compra", lo redirigimos a admin o le mostramos una alerta
    //         toast.warn("Los administradores no pueden realizar compras");
    //         navigate('/admin');
    //     }
    // };


    return (
        // <div className={`cart-overlay-${visibilidadCarrito}`} onClick={onClose}>
        <div className={`cart-overlay-${visibilidadCarrito}`} onClick={() => setIsCartOpen(false)}>

            <div className={`cart-drawer ${visibilidadCarrito} z-1100`} onClick={(e) => e.stopPropagation()}>
                <div className='cart-header'>
                    <h2>Carrito</h2>
                    {/* <button onClick={onClose}><li className="fa-solid fa-arrow-left"></li></button> */}
                    <button onClick={() => setIsCartOpen(false)}><li className="fa-solid fa-arrow-left"></li></button>

                </div>
                {
                    cart.length === 0 ? (
                        <div className='empty-cart'>
                            {/* <button style={{color:"white"}}><li className="fa-solid fa-cart-shopping" ></li></button> */}
                            {/* <CartIcon size={120} color="#555" /> */}
                            {/* <>
                                <i className="fa fa-shopping-cart fa-8x"></i>
                            </> */}
                            <span style={{ display: "inline-block", fontSize: "6rem", color: "#000" }}>
                                <i className="fa fa-shopping-cart"></i>
                            </span>

                            <p style={{ color: 'red' }}><b>Tu carrito está vacio</b></p>
                        </div>) :
                        (
                            <>
                                <ul className='cart-list'>
                                    {
                                        // cart.map((item, index) => (
                                        cart.map((item) => (
                                            <div key={item.id} className='cart-item-wrapper'>

                                                {/* {console.log("item.id: ", item.id)} */}
                                                {/* <div className='cart-item-container' key={index}> */}
                                                <div className='cart-item-container' >

                                                    {/* <p style={{ color: 'black', alignItems: "left", fontFamily: "cursive" }}>{item.nombre}</p> */}
                                                    <p style={{ color: 'black', alignItems: "left" }}>{item.nombre}</p>
                                                    <li className='cart-item' > {/*key={item.id}*/}
                                                        <div className='img-item'>
                                                            <img src={item.imagen} alt={item.nombre} />
                                                        </div>
                                                        <div className='item-info'>
                                                            {/* <p>{item.title.split(" ")[0] + " " + item.title.split(" ")[1] + " " + item.title.split(" ")[2]}</p>  */}
                                                            {/* <b><p> $ {(item.precio).toFixed(2)}</p></b> */}
                                                            <b><p> $ {item.precio}</p></b>
                                                            {/* <p>cant: {item.cantidad}</p> */}
                                                        </div>

                                                        <div className='cantidadContainer'>
                                                            <button className='qtyButton' onClick={() => decrease(item)}>-</button>
                                                            {/* <span>{cantidad}</span> */}
                                                            <span style={{ color: 'black' }}>{item.cantidad}</span>
                                                            <button className='qtyButton' onClick={() => increase(item)}>+</button>
                                                        </div>
                                                        <div className='delete-btn'>
                                                            {/* <button onClick={() => handleDeleteFromCart(item)} >
                                                                <li className='fa-solid fa-trash'></li>
                                                            </button> */}
                                                            <button onClick={() => {
                                                                Swal.fire({
                                                                title: '¿Eliminar producto?',
                                                                text: 'Esta acción quitará el producto del carrito',
                                                                icon: 'warning',
                                                                showCancelButton: true,
                                                                confirmButtonColor: '#d33',
                                                                cancelButtonColor: '#3085d6',
                                                                confirmButtonText: 'Sí, eliminar',
                                                                cancelButtonText: 'Cancelar'
                                                                }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    handleDeleteFromCart(item);
                                                                    Swal.fire('Eliminado', 'El producto fue eliminado del carrito', 'success');
                                                                }
                                                                });
                                                            }}
                                                            >
                                                            <li className='fa-solid fa-trash'></li>
                                                            </button>
                                                        </div>

                                                    </li>

                                                </div>
                                            </div>
                                        ))

                                    }
                                    {/* <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}
                                </ul>
                                {/* <button style={{ backgroundColor: "red", color: "white" }} onClick={handleVaciarCarrito}>Vaciar Carrito</button> */}
                                    <button style={{ backgroundColor: 'red', color: 'white' }}
                                        onClick={() => {
                                            Swal.fire({
                                            title: '¿Vaciar carrito?',
                                            text: 'Se eliminarán todos los productos del carrito',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#d33',
                                            cancelButtonColor: '#3085d6',
                                            confirmButtonText: 'Sí, vaciar',
                                            cancelButtonText: 'Cancelar'
                                            }).then((result) => {
                                            if (result.isConfirmed) {
                                                handleVaciarCarrito();
                                                Swal.fire('Carrito vacío', 'Todos los productos fueron eliminados', 'success');
                                            }
                                            });
                                        }}
                                        >
                                        Vaciar Carrito
                                    </button>
                                <div className='cart-footer'>
                                    <div>
                                        <p style={{ color: "black" }}><b>Total: </b></p>
                                    </div>
                                    <div>
                                        {/* <p style={{ color: "black" }}><b>$ {precioTotal.toFixed(2)}</b> </p> */}
                                        <p style={{ color: "black" }}><b>$ {precioTotal}</b> </p>
                                    </div>
                                </div>
                                {/* <Link style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }} to="/admin"><button style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }}><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button></Link> */}
                                <button style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }} onClick={finalizarCompra}><i className="fa-solid fa-bag-shopping"></i> Finalizar compra</button>
                                {/* <button style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }} ><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button> */}

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