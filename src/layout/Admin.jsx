import { useState, useEffect } from 'react'
import loading from '../assets/loading.gif'
import './style/Admin.css'
import { data } from 'react-router-dom';
import FormularioProductos from '../components/FormularioProductos';

function Admin() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false)


  useEffect(() => {
    // fetch('https://api.escuelajs.co/api/v1/products')
    // fetch('https://fakestoreapi.com/products')
    fetch('https://api.escuelajs.co/api/v1/products')
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
  }, [productos]) // Dependencia productos para que se actualice al agregar un nuevo producto

  console.log(
    'productos desde ADMIN API: ', productos
  )


  const agregarProducto = async (producto) => {

    try {
      // const response = await fetch('https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos', {
      const response = await fetch('https://api.escuelajs.co/api/v1/products', {
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
      alert('Producto : ' + data.title + ', fué agregado exitosamente');

    } catch (error) {
      console.error('Error al agregar el producto:', error);
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
                        src={product.images[0]}
                        alt={product.title}
                        className="listItemImage"
                      />
                      <span>{product.title}</span>
                      <span>${product.price}</span>
                      <div>
                        <button className="editButton">Editar</button>

                        <button className="deleteButton">Eliminar</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
                {open && (<FormularioProductos onAgregar={agregarProducto} />)}
              </div>
            </>
          )}

    </div>
  )
};

export default Admin