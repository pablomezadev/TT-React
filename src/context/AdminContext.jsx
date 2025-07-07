import { createContext, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar al usuario después de la autenticación
import { CartContext } from './CartContext'; // Importamos el contexto del carrito para actualizar el estado de autenticación
import { toast } from 'react-toastify'
import Swal from 'sweetalert2';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false)
    const apiUrl = 'https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos';
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditar, setOpenEditar] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();



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
            toast.error('Error al cargar los productos:', error)
            // console.error('Error al cargar los productos:', error);
        }
    }

    //agregar loader
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
            toast.success('Producto agregado exitosamente',
             {
                autoClose: 2000,
                position: "top-center"
            });
            
            setOpen(false);
            // alert('Producto : ' + data.nombre + ', fué agregado exitosamente');
            cargarProductos(); // Recargar la lista de productos después de agregar uno nuevo

        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    }

    const eliminarProducto = async (id) => {
    const confirm = await Swal.fire({
      title: '¿Confirmar eliminación?',
      text: '¿Deseas eliminiar el producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (confirm.isConfirmed) {
      
         try {
                // const response = await fetch(`https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos/${id}`, {
                // const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
                const response = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) throw new Error('Error al eliminar el producto');
                //  toast.success('Producto eliminado con exito: ',productos[id].nombre);
                 toast.success('Producto eliminado con exito ',
                {
                    autoClose: 2000,
                    position: "top-center"
                }
                 );
                // alert('Producto eliminado exitosamente');
                cargarProductos(); // Recargar la lista de productos después de eliminar uno
            } catch (error) {
                toast.error('Hubo un error al intentar eliminar el producto ',
                {
                    autoClose: 2000,
                    position: "top-center"
                }
                 );
                // console.error('Error al eliminar el producto:', error);
            }
    //   Swal.fire('Actualizado', 'El producto fue Actualizado en el itinerario', 'success');
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
            cargarProductos(); // Recargar la lista de productos después de actualizar uno
            setOpenEditar(false); // Cerrar el formulario de edición
            setSeleccionado(null); // Limpiar el producto seleccionado
            cargarProductos(); // Recargar la lista de productos después de actualizar uno
        } catch (error) {
            console.error('Error general al actualizar el producto:', error);
        }
    }

    return (
        <AdminContext.Provider value={{
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
        }}>
            {children}
        </AdminContext.Provider>
    )
}