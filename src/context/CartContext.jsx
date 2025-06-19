import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    // const sumaTotal = () => { return cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);}
    const apiUrl = "https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos"

    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        // fetch('https://api.escuelajs.co/api/v1/products')
        fetch(apiUrl)
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
    }, [])

    // console.log(productos);

    const normalizar = (texto) =>
        texto?.toLowerCase().replace(/\s/g, ''); // elimina espacios

    const productosFiltrados = productos.filter((producto) =>
        normalizar(producto.nombre).includes(normalizar(busqueda))
    );

    const handleAddToCart = (prod) => {
        const prdExiste = cart.find(item => item.id === prod.id)
        if (prdExiste) {
            if (prod.cantidad >= 1) {
                alert(`El producto ${prod.nombre} ya existe en el carrito`)
                console.log(`el producto ${prod.nombre} YA fué agregado`)
            } else {
                setCart(cart.map((item) => (
                    item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad } : item // pruebas
                    // item.id === prod.id ? {...item, cantidad : item.cantidad + prod.cantidad }: item
                )))
            }
            console.log('Carrito actualizado: ', cart);
            // alert(`el producto ${prod.nombre} ya existe`)

        } else {
            setCart([...cart, { ...prod, cantidad: prod.cantidad }])
            console.log(`producto agregado: `, prod)
            console.log(`carrito: `, cart)
        }
        console.log('Carrito actualizado: ', cart);
    }


    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad >= 1) {
                        return null; //si es 1, lo marcamos para eliminarlo
                    }
                } else {
                    return item; //si no es el producto, lo dejamos igual
                }
            }).filter(item => item !== null); //eliminamos los productos marcados como null
        });
    };

    const handleVaciarCarrito = () => {
        setCart([]) // esto sí vacía correctamente el carrito
        setPrecioTotal(0);
    }

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        setPrecioTotal(total);
    }, [cart]); // se ejecuta automáticamente cuando cambia el carrito


    const actualizarCantidad = (producto, nuevaCantidad) => {
        setCart(prevCartItems =>
            prevCartItems.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        );
    };
    return (
        <CartContext.Provider value={
            {
                cart, productos, cargando, error, precioTotal, isAuthenticated, handleDeleteFromCart
                , handleVaciarCarrito, setIsAuthenticated, handleAddToCart, actualizarCantidad,
                busqueda, setBusqueda, productosFiltrados, isCartOpen,setIsCartOpen
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

