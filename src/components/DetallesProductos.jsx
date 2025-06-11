import React from 'react'
import { useParams } from 'react-router-dom'


function DetallesProductos({productos}) {
    const { id } = useParams();
    // Aquí podrías hacer una llamada a la API para obtener los detalles del producto por ID
    console.log('ID del producto:', id);
    console.log("productos",productos)
    
    const product = productos.find(prod => prod.id == id)
    return (
        <>
            <div><h2>DetallesProductos {id} </h2></div>
            {
                product ? (
                    <div>
                        <h3>{product.nombre}</h3>
                        <img src={product.imagen} alt={product.nombre} />
                        <p>Precio: ${product.precio}</p>
                        <p>Descripción: {product.descripcion}</p>
                        {/* <p>Calificación: {product.rating.rate} ({product.rating.rate} votos)</p> */}
                    </div>
                ) : (
                    <p>Producto no encontrado</p>
                )
            }
        </>
    )
}

export default DetallesProductos