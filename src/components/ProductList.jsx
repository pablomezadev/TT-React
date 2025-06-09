import React from 'react'
import Product from './Product'
import './style/ProductList.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

// const ProductList = ({ products, addToCart, borrarUnProducto }) => {
const ProductList = () => {
    const { productos, handleAddToCart } = useContext(CartContext)

    return (
        <div className='lista-productos'>
        <h1>Lista de productos</h1>
        <div className="product-grid">
            {
                productos.map((prod, index) => (
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