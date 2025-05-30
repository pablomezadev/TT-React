import React from 'react'
import './style/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">¡Ups! Página no encontrada 🛒</p>
        <p className="notfound-text">
          Pero no te preocupes, ¡tenemos muchas otras ofertas para vos!  
          <br /><br />
          <button><Link to="/">Volver a la página de inicio</Link></button>
        </p>
      </div>
    </div>
  )
}

export default NotFound
