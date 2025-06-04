import React, { useState } from 'react'
import './style/Product.css'
import { Link } from 'react-router-dom'

const Product = ({ id, product, addToCart }) => {
    const [cantidad, setCantidad] = useState(1)
    // const [stock, setStock] = useState(5)
    const [agregado, setAgregado] = useState(false)

    const aumentar = () => setCantidad(prev => prev != product.rating.count ? prev + 1 : prev)
    const disminuir = () => setCantidad((prev) => prev > 1 ? prev - 1 : 1)

    const handleAgregar = () => {
        addToCart({ ...product, cantidad })
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
        marginTop: '10px',
        cursor: 'pointer',
        textDecoration: 'none',
    }


    return (
        <section className="product-card">
            <div className='fondoProducto'>
            </div>
            <img src={product.image} alt={`imagen_${product.title}`} />
            <h3 >{product.title}</h3>
            <p >Stock: {product.rating.count}</p>
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
            <Link to={`/productos/${product.id}`} style={verMasStyle}>Ver más</Link>
        </section>
    )
}

export default Product