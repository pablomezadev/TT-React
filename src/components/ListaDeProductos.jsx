// componentes avanzados
import React from "react";

const ListaDeProductos = ({ productos }) => {
    return (
        <ol>
            {
                productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                    </li>
                ))
            }
        </ol>
    )
}

export default ListaDeProductos