import { useState, useEffect } from 'react'
import loading from '../assets/loading.gif'
import './style/Admin.css'
import { data } from 'react-router-dom';
import FormularioProductos from '../components/FormularioProductos';
import FormularioEditarProd from '../components/FormularioEditarProd';

function Admin() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false)
  const apiUrl = 'https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos';
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditar, setOpenEditar] = useState(false);

  useEffect(() => {
    fetch('https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos')
      .then(respuesta => respuesta.json())
      //logica para manejar los datos
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000)
      })
      .catch(error => {
        console.log("Error al intentar obtener productos: ", error)
        setCargando(false)
        setError(true)
      })
  }, []) //


  const cargarProductos = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }


  // console.log(
  //   'productos desde ADMIN API: ', productos
  // )


  const agregarProducto = async (producto) => {

    try {
      // const response = await fetch('https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos', {
      // const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el producto');
      }

      const data = await response.json();
      alert('Producto : ' + data.nombre + ', fué agregado exitosamente');
      cargarProductos(); // Recargar la lista de productos después de agregar uno nuevo

    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  }

  const eliminarProducto = async (id) => {
    const confirmarDelete = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmarDelete) {
      try {
        // const response = await fetch(`https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos/${id}`, {
        // const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        const response = await fetch(`${apiUrl}/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Error al eliminar el producto');
        alert('Producto eliminado exitosamente');
        cargarProductos(); // Recargar la lista de productos después de eliminar uno
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  }


  const actualizarProducto = async (producto) => {
    try {
      const response = await fetch(`${apiUrl}/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) throw new Error('Error de servicio al actualizar el producto');
      const data = await response.json();
      alert('Producto:  ' + data.nombre + ' actualizado exitosamente');
      //cargarProductos(); // Recargar la lista de productos después de actualizar uno
      setOpenEditar(false); // Cerrar el formulario de edición
      setSeleccionado(null); // Limpiar el producto seleccionado
      cargarProductos(); // Recargar la lista de productos después de actualizar uno
    } catch (error) {
      console.error('Error general al actualizar el producto:', error);
    }
  }

  return (

    <div className='adminContainer'>
      {
        cargando ? <img src={loading} alt="loading" /> :
          (
            <>
              <nav>
                <ul className="nav-admin">
                  <li className="navItem">
                    <a href="/admin">Admin</a>
                  </li>
                  <li className="navItem">
                    <button className="navButton">
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                  </li>
                </ul>
              </nav>
              <h1 className="title">Panel Administrativo</h1>

              <div className="productListContainer">
                <ul className="list">
                  {productos.map((product) => (
                    <li key={product.id} className="listItem">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="listItemImage"
                      />
                      <span>{product.nombre}</span>
                      <span>${product.precio}</span>
                      <div>
                        <button className="editButton"
                          onClick={() => {
                            setOpenEditar(true)
                            setSeleccionado(product)
                          }}>Editar</button>

                        <button onClick={() => eliminarProducto(product.id)} className="deleteButton">Eliminar</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
      <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
      {open && (<FormularioProductos onAgregar={agregarProducto} />)}
      {openEditar && (<FormularioEditarProd productoSeleccionado={seleccionado}
        onActualizarProducto={actualizarProducto} />)}
    </div>
  )
};

export default Admin