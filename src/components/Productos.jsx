/** Product */
import React, { useState, useContext } from 'react'
// import './styles/styleProductos.css'
import './styles/styleProductos2.css'
import { Link } from 'react-router-dom'
// import { CartContext } from '../context/CartContext'
import { CartContext } from '../context/CartContext'

// const Productos = ({ producto, agregarProducto, cart }) => {
const Productos = ({ producto}) => {
  const {
    cart, handleAddToCart,
    busqueda, setBusqueda, productosFiltrados
  } = useContext(CartContext);


  // console.log("Productos:", producto);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false)
  // const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1 : prev));
  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

  const handleAgregar = () => {
    // agregarProducto({ ...producto, cantidad })
    handleAddToCart({ ...producto, cantidad })
    setAgregado(true)
    setTimeout(() => {
      // setAgregado(false)
    }, 3000)
  }

  return (
    <section className='productoCard'>
      <div className='imgContainer'>
        <Link to={`/productos/${producto.id}`} >
          <img src={producto.imagen} alt={producto.nombre}
          // style={{ objectFit:"contain", width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: '#f9f9f9', maxHeight:"550px" }}
          />
        </Link>
      </div>
      <div className='productos-card-footer'>
        {/* <div className=''> */}
        <div className="badge-oferta">OFERTA DEL DÍA</div>
        <h3 className='nombre'>{
          // producto.nombre.split(" ")[0] + " " + producto.nombre.split(" ")[1] + " " + producto.nombre.split(" ")[2]
          // producto.nombre.split(" ")
          producto.nombre
        }</h3>
        <i className='fas fa-star' style={{ color: 'blue' }}></i>
        <i className='fas fa-star' style={{ color: 'blue' }}></i>
        <i className='fas fa-star' style={{ color: 'blue' }}></i>
        <i className='fas fa-star' style={{ color: 'blue' }}></i>
        <i className='fas fa-star' style={{ color: 'blue' }}></i>


        <p className='price'>$: {producto.precio}</p>
        <p className='stock'>stock: {producto.stock}</p>

        {/* <button onClick={()=>agregarCarrito(producto)}>Agregar al carrito</button> */}
        <button className='productos-button agregar' onClick={handleAgregar}>Agregar al carrito</button>
        <Link to={`/productos/${producto.id}`} ><button className='productos-button' >Ver más...</button></Link>
      </div>
    </section>
  )
}

export default Productos