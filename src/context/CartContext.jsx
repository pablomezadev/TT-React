import {createContext,  useState,useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setToCart] = useState([])
  const [isCartOpen, setCartOpen] = useState(false);
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [precioTotal, setPrecioTotal] = useState(0)
  const [isAuthenticated , setIsAuthenticated] = useState(false);

  // console.log('carrito array: ',cart)

  const handleAddToCart = (prod) => {
    const prdExiste = cart.find(item => item.id === prod.id)
    if (prdExiste) {
      if (prod.cantidad >= 1) {
        console.log(`el producto ${prod.title} YA fué agregado`)
      } else {
        setToCart(cart.map((item) => (
          // item.id === prod.id ? {...item, cant : item.cant+1 }: item // ok 
          //console.log("prod.cant: "+prod.cant)
          // console.log("prod.cantidad: "+prod.cantidad)
          item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad } : item // pruebas
          // item.id === prod.id ? {...item, cantidad : item.cantidad + prod.cantidad }: item
        )))
      }
      console.log('Carrito actualizado: ', cart);
      // alert(`el producto ${prod.nombre} ya existe`)

    } else {
      setToCart([...cart, { ...prod, cantidad: 1 }])
      // setToCart([...cart, { ...prod, cantidad: 1 }])
      // setToCart([...cart,{...prod,cantidad: prod.cantidad}])

      console.log(`producto agregado: `, prod)
      console.log(`carrito: `, cart)
      // alert(`Producto: ${prod.nombre} fué agregado correctamente`)

    }
    console.log('Carrito actualizado: ', cart);
  }

  const borrarUnProducto = (producto) => {
    setToCart((previoCarrito) => {
      console.log('Actualizacion carrito: ', previoCarrito)
      return previoCarrito.map((itemProd) => {
        if (itemProd.id === producto.id) {
          if (itemProd.cantidad > 1) {
            return { ...itemProd, cantidad: itemProd.cantidad - 1 }
          } else {
            return null
          }
        } else {
          return itemProd
        }
      }).filter(item => item != null)
    }
    )
  }

  const vaciarCarrito = () => {
    setToCart([])

    setPrecioTotal(0);
    console.log('total actualizado en carrito vacio: ', precioTotal)
    console.log('Carrito - en carrito vacio: ', cart)
  }

  /*USEEFFECT (ejemplo muy basico)
  // Escenarios de ejecución:
  // 1. Primer render → "Montado"
  // 2. Re-render (cambio de estado/props) → NO pasa nada
  // 3. Desmontar componente → "Desmontado"
  // 4. Volver a montar → "Montado" (nueva instancia)
  
  // Importante: 
  // - El return (limpieza) NO se ejecuta en re-renders
  // - Si el padre vuelve a renderizarse pero mantiene el componente, no hay desmontaje
   
  Orden de ejecución:
  - Primer render → (2) se ejecuta
  - Re-renders → NO ejecuta nada (por el array vacío [])
  - Desmontaje → (4) se ejecuta
  */

  useEffect(() => {       // 1. Declaración del efecto - Se registra cuando el componente se monta
    console.log('El componente se ha montado.'); // 2. Se ejecuta INMEDIATAMENTE después del primer renderizado

    return () => {        // 3. Función de limpieza - Se prepara pero NO se ejecuta todavía
      console.log('El componente se ha desmontado.'); // 4. Se ejecutará SOLO cuando el componente se desmonte (si hay un cambio)
    };
  }, []);                 // 5. Array de dependencias VACÍO = efecto se ejecuta 1 sola vez


  useEffect(() => {
    // fetch('https://api.escuelajs.co/api/v1/products')
    fetch('https://fakestoreapi.com/products')
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

  console.log(
    'productos desde API: ', productos
  )

  const sumaTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
  }

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
    setPrecioTotal(total);
  }, [cart]); // se ejecuta automáticamente cuando cambia el carrito

    return (
        <CartContext.Provider 
        value={{
            cart,
            setToCart,
            isCartOpen,
            setCartOpen,
            productos,
            cargando,
            error,
            precioTotal,
            handleAddToCart,
            borrarUnProducto,
            vaciarCarrito,
            sumaTotal,
            isAuthenticated, 
            setIsAuthenticated
        }}>
            {children}
        </CartContext.Provider>
    );
}