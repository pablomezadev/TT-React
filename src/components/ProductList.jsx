import React from 'react'
import Product from './Product'
import './style/ProductList.css'

const ProductList = ({ products, addToCart, borrarUnProducto }) => {
    return (
        <div className="product-grid">
            {
                products.map((prod, index) => (
                    <Product
                        key={prod.id} 
                        id={prod.id} 
                        product={prod} 
                        addToCart={addToCart}
                    />
                ))
            }
        </div>
    )
}

export default ProductList