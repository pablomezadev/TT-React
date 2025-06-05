/* ProductList - componente encargado de reproducir los productos */
import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregarCarrito, cart }) => {

    return (
        <>
        
        {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px'}}> */}
        <section className='productosContainer'>
            
            {   
                productos.map(producto => (
                    <Productos key={producto.id} producto={producto} agregarCarrito={agregarCarrito} cart={cart}/>
                ))
            }
        </section>
        </>
    )
}

export default ProductList