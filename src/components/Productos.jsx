/** Product */
import React, {useState} from 'react'
import './styleProductos.css'

const Productos = ({producto, agregarCarrito, cart}) => {
  console.log("Productos:", producto.cant);
    const [cantidad, setCantidad] = useState(1);
    const [agregado, setAgregado] = useState(false)
    // const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1 : prev));
    const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1: prev));
    const decrease = ()=>setCantidad(prev=> (prev > 1 ? prev - 1 : prev));
    
    const handleAgregar = () => {
      agregarCarrito({ ...producto, cantidad })
      setAgregado(true)
      setTimeout(() => {
        // setAgregado(false)
      }, 3000)
    }


  return (
    <section className='productoCard'>
        <div className='imgContainer'>
            <img src={producto.image} alt={producto.title} />
        </div>
        <h3 className='nombre'>{    
          producto.title.split(" ")[0]+" "+producto.title.split(" ")[1]+" "+producto.title.split(" ")[2]
        }</h3>
        <p className='precio'>$: {producto.price}</p>
        <p className='stock'>stock: {producto.rating.count}</p>
        
        <div className='cantidadContainer'>
            <button className='qtyButton' onClick={decrease}>-</button>
            {/* <span>{cantidad}</span> */}
            <span>{cantidad}</span>
            <button className='qtyButton' onClick={increase}>+</button>
        </div>
        {/* <button onClick={()=>agregarCarrito(producto)}>Agregar al carrito</button> */}
        <button onClick={handleAgregar}>Agregar al carrito</button>
    </section>
  )
}

export default Productos