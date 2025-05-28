/** Product */
import React, {useState} from 'react'
import './styleProductos.css'

const Productos = ({producto, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1);
    const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1 : prev));
    const decrease = ()=>setCantidad(prev=> (prev > 1 ? prev - 1 : prev));

  return (
    <section>
        <div className='imgContainer'>
            <img src={producto.image} alt={producto.title} />
        </div>
        <h3 className='nombre'>{producto.title}</h3>
        <p className='precio'>$: {producto.price}</p>
        <p className='stock'>stock: {producto.rating.count}</p>
        
        <div className='cantidadContainer'>
            <button className='qtyButton' onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button className='qtyButton' onClick={increase}>+</button>
        </div>
        <button onClick={()=>agregarCarrito(producto)}>Agregar al carrito</button>
    </section>
  )
}

export default Productos