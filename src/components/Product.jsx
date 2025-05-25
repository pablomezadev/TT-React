import React, { useState } from 'react'
import './style/Product.css'

const Product = ({ id, product, addToCart }) => {
    const [cantidad, setCantidad] = useState(1)
    // const [stock, setStock] = useState(5)
    const [agregado, setAgregado] = useState(false)

    const aumentar = () => setCantidad(prev => prev != product.stock ? prev + 1 : prev)
    const disminuir = () => setCantidad((prev) => prev > 1 ? prev - 1 : 1)

    const handleAgregar = () => {
            addToCart({ ...product, cantidad })
            setAgregado(true)

            setTimeout(() => {
                // setAgregado(false)
            }, 3000)
    }


    return (
        <section className="product-card">
            <div className='fondoProducto'>
            </div>
            <img src={product.imagen} alt={`imagen_${product.nombre}`} />
            <h3 >{product.nombre}</h3>
            <p >Stock: {product.stock}</p>
            <p >Precio: ${product.precio}</p>
            <div className="cantidad-control">
                <button onClick={disminuir}>-</button>
                <span>{cantidad}</span>
                <button onClick={aumentar}>+</button>
            </div>
            {/* <button onClick={() => addToCart(product)}> */}
            <button onClick={handleAgregar}>
                Agregar
            </button>
        </section>
    )
}

export default Product