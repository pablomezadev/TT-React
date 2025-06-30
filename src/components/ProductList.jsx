/* ProductList - componente encargado de reproducir los productos */
import { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {
    const {
        cart, handleAddToCart,
        busqueda, setBusqueda, productosFiltrados
    }   = useContext(CartContext)

    return (
        <>

            {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px'}}> */}
            {/* <label htmlFor="">Buscar Producto</label><br />
            <input type="text"
                placeholder='Buscar producto...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            /> */}
            <section className='productosContainer'>
                {
                    productosFiltrados.map(producto => (
                        // <Productos key={producto.id} producto={producto} agregarProducto={handleAddToCart} cart={cart} />
                        <Productos key={producto.id} producto={producto} agregarProducto={handleAddToCart} />
                    ))
                }
            </section>
        </>
    )
}

export default ProductList