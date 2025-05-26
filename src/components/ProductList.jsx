/* ProductList - componente encargado de reproducir los productos */
import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos }) => {
    return (
        <>
        <h2>Galeria de productos</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px'}}>
            {   
                productos.map(producto => (
                    <Productos key={producto.id} producto={producto} />
                ))
            }
        </div>
        </>
    )
}

export default ProductList