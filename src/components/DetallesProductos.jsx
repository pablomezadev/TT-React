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
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>Precio: ${product.price}</p>
                        <p>Descripción: {product.description}</p>
                        <p>Calificación: {product.rating.rate} ({product.rating.count} votos)</p>
                    </div>
                ) : (
                    <p>Producto no encontrado</p>
                )
            }
        </>
    )
}

export default DetallesProductos