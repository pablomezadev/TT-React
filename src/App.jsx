import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetallesProductos'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'
import Login from './pages/Login'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [precioTotal, setPrecioTotal] = useState(0)
  const [isAuthenticated , setIsAuthenticated] = useState(false);
  // const sumaTotal = () => { return cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);}

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

  console.log(productos);
  // console.log("imagenes: "+productos.map(producto => producto.images[0]));

  // const handleAddToCart = (product) => {
  //   const productInCart = cart.find(item => item.id === product.id);

  //   if (productInCart) {
  //     setCart(cart.map(item =>
  //       item.id === product.id ? { ...item, cant: item.cant + 1 } : item
  //     ));
  //   } else {
  //     setCart([...cart, { ...product, cant: 1 }]);
  //   }
  // }

  const handleAddToCart = (prod) => {
    const prdExiste = cart.find(item => item.id === prod.id)
    if (prdExiste) {
      if (prod.cantidad >= 1) {
        alert(`El producto ${prod.title} ya existe en el carrito`)
        console.log(`el producto ${prod.title} YA fué agregado`)
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
          if (item.cantidad > 1) {
          //   return { ...item, cantidad: item.cantidad - 1 }
          // } else {
          //   return null; //si es 1, lo marcamos para eliminarlo
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
    const total = cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
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
    <>
      <Routes>
        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} error={error} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />
        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} precioTotal={precioTotal} actualizarCantidad={actualizarCantidad}/>} />
        <Route path="/productos/:id" element={<DetallesProductos productos={productos}/>} />
        <Route path='/contacto' element={<Contacto precioTotal={precioTotal} borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} actualizarCantidad={actualizarCantidad}/>} />
        
        <Route path="/admin" 
          element={ 
            <RutaProtegida isAuthenticated={isAuthenticated}> 
              <Admin />
            </RutaProtegida>
            } 
        />
        <Route path="/login" element={ <Login setIsAuthenticated={setIsAuthenticated}/> }/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
