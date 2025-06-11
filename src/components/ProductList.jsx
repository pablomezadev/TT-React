import React from 'react'
import Product from './Product'
import './style/ProductList.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

// const ProductList = ({ products, addToCart, borrarUnProducto }) => {
const ProductList = () => {
    const { productos, handleAddToCart, productosFiltrados, busqueda,setBusqueda } = useContext(CartContext)

    return (
        <div className='lista-productos'>
            <h1>Lista de productos</h1>
            <input type="text"
                placeholder='Buscar producto...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="product-grid">
                {
                    productosFiltrados.map((prod, index) => (
                        <Product
                            key={prod.id}
                            id={prod.id}
                            product={prod}
                            addToCart={handleAddToCart}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList