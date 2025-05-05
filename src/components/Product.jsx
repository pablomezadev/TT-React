import React from 'react'
import './style/Product.css'

const Product = ({ id, product, addToCart}) => {
    return (
        <section className="product-card">
            <div className='fondoProducto'>
            </div>
            <img src={product.imagenUrl} alt={`imagen_${product.nombre}`} />
            <h3 >{product.nombre}</h3>
            <span> - </span>
            <p >${product.precio.toFixed(2)}</p>
            <button  onClick={() => addToCart(product)}>
                Agregar
            </button>
        </section>
    )
}

export default Product