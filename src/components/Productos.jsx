/** Product */
import React, { useState } from 'react'
import './styles/styleProductos.css'
import { Link } from 'react-router-dom'

const Productos = ({ producto, agregarProducto, cart }) => {
  // console.log("Productos:", producto);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false)
  // const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1 : prev));
  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

  const handleAgregar = () => {
    agregarProducto({ ...producto, cantidad })
    setAgregado(true)
    setTimeout(() => {
      // setAgregado(false)
    }, 3000)
  }
  const verMasStyle = {
    backgroundColor: '#6a5acd', // un violeta suave que combina con azul
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    marginTop: '0px',
    cursor: 'pointer',
    textDecoration: 'none',
  }

  return (
    <section className='productoCard'>
      <div className='imgContainer'>
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <h3 className='nombre'>{
        // producto.nombre.split(" ")[0] + " " + producto.nombre.split(" ")[1] + " " + producto.nombre.split(" ")[2]
        producto.nombre.split(" ")
      }</h3>
      {/* <p className='price'>$: {producto.precio.toFixed(2)}</p> */}
      <p className='price'>$: {producto.precio}</p>
      <p className='stock'>stock: {producto.stock}</p>

      {/* <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div> */}
      {/* <button onClick={()=>agregarCarrito(producto)}>Agregar al carrito</button> */}
      <button onClick={handleAgregar}>Agregar al carrito</button>
      <Link to={`/productos/${producto.id}`} style={verMasStyle}>Ver más</Link>
    </section>
  )
}

export default Productos