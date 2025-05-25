import { useState, useEffect } from 'react'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
// import { productList } from '../utils/data'
import ProductList from '../components/ProductList'
// import { productList } from '../utils/data'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'

const Home = ({cart, handleAddToCart, borrarUnProducto,vaciarCarrito, isCartOpen, setCartOpen}) => {
    const countItem = cart
    const [productList,setProductList] = useState([])
    //prevenir errores
    const [carga, setCarga] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        fetch('https://6828d1896075e87073a509a9.mockapi.io/productos-ecommerce/productos')
        .then((respuesta)=>respuesta.json())
        .then((datos)=>{
            setProductList(datos) 
            setCarga(false)
        })
        .catch((error)=>{
            console.error("Error al procesar api: "+error)
            setCarga(false)
            setError(true)
        })
    },[])
    
    console.log("productos desde api: ", productList)

    if(error){
        return<NotFound/>
    }

    return (
        <>
            <Header />
            <Nav countItem={countItem} borrarUnProducto={borrarUnProducto} vaciarCarrito={vaciarCarrito} isCartOpen={isCartOpen} setCartOpen={setCartOpen}/>
            <Main data={productList}/>
            {carga? <img src={loading} alt="loading" />:
                <ProductList products={productList} addToCart={handleAddToCart}/>
            }
            <Cart cartItems={cart}/>
            <Footer />
        </>
    )
}

export default Home