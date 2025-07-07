import { useContext } from 'react'
import './styles/admin.css'
import { NavLink,Link , useNavigate } from 'react-router-dom';
// import FormularioProductos from '../components/FormularioProductos';
import FormularioEditarProd from '../components/admin/FormularioEditarProd';
import { AdminContext } from '../context/AdminContext';
import { CartContext } from '../context/CartContext';
import Spinner from '../components/Spinner'
// import { useAuth } from '../../context/AuthContext'
import { useAuth } from '../context/AuthContext'
// import FormularioAgregarProdModal from '../components/admin/FormularioAgregarProdModal';
import FormularioAgregarModal from '../components/admin/FormularioAgregarModal'

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

  const { logOut } = useAuth();

  // const linkStyle = ({ isActive }) =>
  //   isActive
  //     ? { fontWeight: 'bold', color: 'yellow', textDecoration: 'underline' }
  //     : undefined;

  const navigate = useNavigate()

  const { setIsAuthenticated } = useContext(CartContext);

  const handleCancelar = () => {
    setOpen(false); // Esto cierra el formulario
    setOpenEditar(false); // Esto cierra el formulario
  };

  return (

    <div className='adminContainer'>
      {
        cargando ? <Spinner size={100} /> :
          (
            <>
              <nav>
                <ul className="nav-admin">
                  <li className="navItem">
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                  <li className="navItem">
                    <button className="navButton"
                      onClick={() => logOut()}
                    // onClick={() => {
                    //   setIsAuthenticated(false);
                    //   navigate('/');
                    //   localStorage.removeItem('isAuthenticated');
                    //   localStorage.removeItem('token');
                    // }}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                  </li>
                </ul>
              </nav>
              <h1 className="title">Panel Administrativo</h1>

              {/* <button onClick={() => setOpen(true)}>Agregar producto nuevo</button> */}
              {/* {!open && (
                <button onClick={() => setOpen(true)} >Agregar producto nuevo</button>
              )} */}
              {!open && (
                <button className='addButton' onClick={() => setOpen(true)}>Agregar producto nuevo <i className="fa-solid fa-plus"></i></button>
              )}
              {open && (
                // <FormularioAgregarProdModal
                //   onAgregar={agregarProducto}
                //   onCancelar={handleCancelar}
                // />
                // <FormularioAgregarModal/>
                  <FormularioAgregarModal
                    onAgregar={agregarProducto}
                    onCancelar={handleCancelar}
                  />
              )}

              {/* {open && (<FormularioProductos onAgregar={agregarProducto} onCancelar={handleCancelar} />)} */}
              {openEditar && (<FormularioEditarProd productoSeleccionado={seleccionado}
                onActualizarProducto={actualizarProducto} onCancelar={handleCancelar} />)
                }

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
      {/* <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
      {open && (<FormularioProductos onAgregar={agregarProducto} />)}
      {openEditar && (<FormularioEditarProd productoSeleccionado={seleccionado}
        onActualizarProducto={actualizarProducto} />)} */}
    </div >
  )
};

export default Admin