import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styleNotFound.css';


function NotFound() {
  return (
    <div className="not-found-container">
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p>Por favor, verifica la URL o vuelve a la página de inicio.</p>
        <button><Link to='/'>Volver a la página de inicio</Link></button>
    </div>
  )
}

export default NotFound