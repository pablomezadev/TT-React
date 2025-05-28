import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)


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

  const handleAddToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);

    if (productInCart) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const handleDeleteFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
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
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} />} />
        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path='/contacto' element={<Contacto borrarProducto={handleDeleteFromCart} vaciarCarrito={handleVaciarCarrito} cart={cart} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
