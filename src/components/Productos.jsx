/** Product */
import React from 'react'
import './styleProductos.css'

const Productos = ({producto}) => {
  return (
    <section>
        <div className='imgContainer'>
            <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <h3 className='nombre'>{producto.nombre}</h3>
        <p className='precio'>$: {producto.precio}</p>
        <p className='stock'>stock: {producto.stock}</p>
        
        <div className='cantidadContainer'>
            <button className='qtyButton'>-</button>
            <span></span>
            <button className='qtyButton'>+</button>
        </div>
        <button >Agregar al carrito</button>
    </section>
  )
}

export default Productos