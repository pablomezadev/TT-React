import { useState } from 'react'
import './EstilosGenerales.css'
import Home from './layout/Home'

function App() {
  const [cart, setToCart] = useState([])
  const [isCartOpen, setCartOpen] = useState(false);
  // console.log('carrito array: ',cart)

  const handleAddToCart = (prod)=>{
    const prdExiste= cart.find(item =>item.id === prod.id)
    if(prdExiste){
      setToCart(cart.map((item)=>(
        item.id === prod.id ? {...item, cant : item.cant+1 }: item
      )))
      console.log(cart)
      // alert(`el producto ${prod.nombre} ya existe`)
    }else{
      // alert(`el producto ${prod.nombre} NO existe`)
      setToCart([...cart,{...prod,cant:1}])
      console.log(`producto agregado: `,prod)   
      // alert(`Producto: ${prod.nombre} fué agregado correctamente`)
    }
  }

  const borrarUnProducto = (producto)=>{
    setToCart( (previoCarrito)=>{
      console.log('Actualizacion carrito: ', previoCarrito)
      return previoCarrito.map((itemProd)=>{
        if(itemProd.id === producto.id){
          if(itemProd.cant > 1 ){
           return {...itemProd, cant: itemProd.cant -1 } 
          }else{
            return null
          }
        }else{
          return itemProd
        }
      }).filter(item => item !=null )
    }
    )
  }

  const vaciarCarrito= ()=>{
    setToCart([])
  }
  
  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen}/>
    </>
  )
}

export default App
