import React from 'react'
import './style/NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">¡Ups! Página no encontrada 🛒</p>
        <p className="notfound-text">
          Parece que este producto o sección no existe o fue movido.  
          Pero no te preocupes, ¡tenemos muchas otras ofertas para vos!  
          <br /><br />
          Volvé al <a href="/">inicio</a> o usá el buscador para encontrar lo que querés.
        </p>
      </div>
    </div>
  )
}

export default NotFound
