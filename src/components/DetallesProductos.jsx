import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import '../components/styles/DetallesProductos.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';



function DetallesProductos() {
    const { id } = useParams();
    const {productos}=useContext(CartContext)
    // Aquí podrías hacer una llamada a la API para obtener los detalles del producto por ID
    console.log('ID del producto:', id);
    console.log("productos", productos)

    const product = productos.find(prod => prod.id == id)
    return (
        <><h2>DetallesProductos {id} </h2>
            <section className='detallesProductos-componente'>
                <div className='detallesProductos-contenedor'>
                    {
                        product ? (
                            <>
                                <div className='detallesProductos-img-pr7'>
                                    <div className='detallesProductos-img-contenedor'>
                                        <img src={product.imagen} alt={product.nombre} />
                                    </div>
                                </div>
                                <div className='detallesProductos-detalle-pr8'>
                                    <div className='detallesProductos-columnas-pr8'>
                                        <div className='detallesProductos-columnas-pr8-textos'>
                                            <h3>{product.nombre}</h3>
                                            <br />
                                            <p>Descripción: {product.descripcion}</p>
                                            {/* <br/> */}
                                            {/* <b><p style={{fontSize:"1.3rem",color:"goldenrod"}}>Calificación: {product.rating.rate} ({product.} votos)</p></b> */}
                                            <br />
                                            <b><p style={{fontSize:"1.8rem"}}>Precio: ${product.precio}</p></b>
                                        </div>
                                        <button style={{ backgroundColor: "black", color: "white", height: "6%", fontSize: "1.2rem" }}><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button>
                                        {/* <button ><i class="fa-solid fa-bag-shopping"></i> Finalizar compra</button> */}
                                        <Link to='/productos'><button style={{ backgroundColor: "green", color: "white", fontSize: "1.2rem", width: "100%" }}><i class="fa-solid fa-bag-shopping"></i> Seguir comprando</button></Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Producto no encontrado</p>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default DetallesProductos