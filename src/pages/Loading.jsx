import React from 'react'
import Loader from '../assets/loading.gif'

function Loading() {
const estilosContenedor = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f5f5f5', // gris claro de fondo
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999 // asegura que esté encima de todo
      }

      const estilosImagen = {
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          opacity: 0.9
        }
  return (
    <>
    <div style={estilosContenedor}>
        <img src={Loader} alt="loader" style={estilosImagen} />
    </div>
    </>
  )
}

export default Loading