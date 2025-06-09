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
        title: '',
        price: '',
        description: '',
        categoryId: 1,
        images:["https://pixabay.com/es/photos/firmar-signo-abierto-se%C3%B1alizaci%C3%B3n-8032702/"]
    });

    // Validación básica de los campos del formulario
    const validarCampos = () => {
        let nuevosErrores = {};
        if (!productos.title.trim()) {
            nuevosErrores.title = 'El nombre es requerido';
        }
        if (!productos.price || productos.price <= 0) {
            nuevosErrores.price = 'El precio debe ser mayor a 0';
        }
        if (!productos.description || productos.description.trim().length < 10) {
            nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres';
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
        onAgregar(productos); // Llamamos a la función onAgregar pasando el producto desde admin.jsx
        setProductos({ // Reiniciamos el estado del formulario
            title: '',
            price: '',
            description: '',
            categoryId: '',
            images:[]
        })
    }

  return (
    <form onSubmit={handleSubmit} className="formulario-productos">
        <h2>Agregar Producto</h2>
        <div>
            <label htmlFor='title'>Nombre:</label>
            <input type="text" 
                    name='title'
                    value={productos.title}
                    onChange={handleChange} required/>
            {error.title && <p style={{ color: 'red' }}>{error.title}</p>}
        </div>
        <div>
            <label label htmlFor="price">Precio:</label>
            <input type="number" 
                    name='price'
                    value={productos.price}
                    onChange={handleChange} required
                    min="0"/>
            {error.price && <p style={{ color: 'red' }}>{error.price}</p>}
        </div>
        <div>
            <label label htmlFor="description">Descripción:</label>
            <textarea name='description'
                      value={productos.description}
                      onChange={handleChange} required></textarea> 
            {error.description && <p style={{ color: 'red' }}>{error.description}</p>}
        </div>
        <button type="submit">Agregar Producto</button> 
    </form>
  )
}

export default FormularioProductos