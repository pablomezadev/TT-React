import {useState} from 'react'

// Componente para el formulario de productos
// Este componente recibe una función `onAgregar` como prop, que se ejecuta al enviar el formulario
// y permite agregar un nuevo producto
// El formulario incluye campos para nombre, precio, descripción del producto
// También maneja el estado de error y la validación básica de los campos
// Se utiliza el hook useState para manejar el estado del formulario y los errores
// El formulario se envía al hacer clic en el botón "Agregar Producto"
// Se previene el comportamiento por defecto del formulario y se valida que los campos no estén vacíos
function FormularioProductos({onAgregar}) {
    const [error, setError] = useState(false);
    const [productos, setProductos] = useState({
        nombre: '',
        precio: '',
        descripcion: ''
    });

    // Validación básica de los campos del formulario
    const validarCampos = () => {
        let nuevosErrores = {};
        if (!productos.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es requerido';
        }
        if (!productos.precio || productos.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0';
        }
        if (!productos.descripcion || productos.descripcion.trim().length < 10) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres';
        }
        setError(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0; // Retorna true si no hay errores
    }   

    // Función para manejar el cambio en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target; // Desestructuramos el evento para obtener el nombre y valor del input
        setProductos({ ...productos,[name]: value }); // Actualizamos el estado del producto
    }

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
        // Validación básica
        onAgregar(productos); // Llamamos a la función onAgregar pasando el producto
        setProductos({
            nombre: '',
            precio: '',
            descripcion: ''
        })
    }

  return (
    <form onSubmit={handleSubmit} className="formulario-productos">
        <h2>Agregar Producto</h2>
        <div>
            <label>Nombre:</label>
            <input type="text" 
                    name='nombre'
                    value={productos.nombre}
                    onChange={handleChange} required/>
            {error.nombre && <p style={{ color: 'red' }}>{error.nombre}</p>}
        </div>
        <div>
            <label>Precio:</label>
            <input type="number" 
                    name='precio'
                    value={productos.precio}
                    onChange={handleChange} required
                    min="0"/>
            {error.precio && <p style={{ color: 'red' }}>{error.precio}</p>}
        </div>
        <div>
            <label>Descripción:</label>
            <textarea name='descripcion'
                      value={productos.descripcion}
                      onChange={handleChange} required></textarea> 
            {error.descripcion && <p style={{ color: 'red' }}>{error.descripcion}</p>}
        </div>
        <button type="submit">Agregar Producto</button> 
    </form>
  )
}

export default FormularioProductos