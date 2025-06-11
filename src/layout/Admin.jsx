import { useContext } from 'react'
import loading from '../assets/loading.gif'
import './style/Admin.css'
import { NavLink, useNavigate } from 'react-router-dom';
import FormularioProductos from '../components/FormularioProductos';
import FormularioEditarProd from '../components/FormularioEditarProd';
import { AdminContext } from '../context/AdminContext';
import { CartContext } from '../context/CartContext';


function Admin() {
  const {
    actualizarProducto,
    seleccionado,
    agregarProducto,
    openEditar,
    open,
    setOpen,
    cargando,
    eliminarProducto,
    productos,
    setOpenEditar,
    setSeleccionado
  } = useContext(AdminContext)

  const linkStyle = ({ isActive }) =>
    isActive
      ? { fontWeight: 'bold', color: 'yellow', textDecoration: 'underline' }
      : undefined;

  const navigate = useNavigate()

  const { setIsAuthenticated } = useContext(CartContext);
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
                  {/* <li >
                    <NavLink to="/login" style={linkStyle}>
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </NavLink>
                  </li> */}

                  <li className="navItem">
                    <button className="navButton" onClick={() => {
                                    setIsAuthenticated(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuthenticated');
                                }}>
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