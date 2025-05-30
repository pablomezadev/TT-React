import React, { useState } from 'react'
import './style/Product.css'

const Product = ({ id, product, addToCart }) => {
    const [cantidad, setCantidad] = useState(1)
    // const [stock, setStock] = useState(5)
    const [agregado, setAgregado] = useState(false)

    const aumentar = () => setCantidad(prev => prev != product.cant ? prev + 1 : prev)
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
            <img src={product.images[0]} alt={`imagen_${product.title}`} />
            <h3 >{product.title}</h3>
            <p >Stock: {product.cant}</p>
            <p >Precio: ${product.price}</p>
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