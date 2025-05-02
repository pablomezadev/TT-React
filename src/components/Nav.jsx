import React from 'react'
import './style/Estilos.css'
import logo from '../assets/react.svg'

const Nav = () => {
    const estilosUl = {listStyle:'none',display:'flex',margin:'0',alignItems:'center',justifyContent:'space-around'}
  return (
    // pasamos los estilos directamente como propiedad usando: {{}}
    <nav style={{backgroundColor:'black',color:'white',padding:'10px'}}>
        <ul style={estilosUl}>
            <img src={logo} />
            <li><a href="#">Inicio</a></li>
            <li>Acerca de</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}

export default Nav