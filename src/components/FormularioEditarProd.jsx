import { use, useState,useEffect } from 'react'

function FormularioEditarProd({ productoSeleccionado, onActualizarProducto, onCancelar }) {
    const [producto, setProducto] = useState({});


    // useEffect para cargar el producto seleccionado
    useEffect(() => {
            setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onActualizarProducto(producto);
        }} className="formulario-editar-producto">
            <h2>Editar Producto</h2>
            <div>
                <label htmlFor='id'>ID:</label>
                <input type="text"
                    name='id'
                    value={producto.id || ''}
                    onChange={handleChange} readOnly />
            </div>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text"
                    name='nombre'
                    value={producto.nombre || ''}
                    onChange={handleChange} required
                />
            </div>
            <div>
                <label htmlFor="precio">Precio:</label>
                <input type="number"
                    name='precio'
                    value={producto.precio || ''}
                    onChange={handleChange} required
                />
            </div>
            <div>
                <label htmlFor="descripcion">Descripción:</label>
                <textarea name='descripcion'
                    value={producto.descripcion || ''}
                    onChange={handleChange} required></textarea>
            </div>
            <div>
                <label htmlFor='imagen'>Imagen URL:</label>
                <input type="text"
                    name='imagen'
                    value={producto.imagen || ''}
                    onChange={handleChange} required />
            </div>
            <button type="submit" >Actualizar Producto</button>
            <button type="button" onClick={onCancelar}>Cancelar</button>
        </form>
    )
}

export default FormularioEditarProd