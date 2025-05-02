import React from 'react'

const Header = () => {
    //definimos los estilos en un objeto como constante
    const estilos = {backgroundColor:'#90EE90', color:'white',marginBottom:'0px',padding:'10px'}
  return (
    <header style={estilos}>
        <h1>Bienvenidos a mi app React
        </h1>
    </header>
  )
}

export default Header