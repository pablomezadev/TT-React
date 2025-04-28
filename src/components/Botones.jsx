import React from 'react'

const Botones = ({texto, color})=>{ // desestructuro los parametros de entrada
  let estilos =  {backgroundColor:color, color:'white', border: '1rem',margin:'1rem',padding:'1rem', borderRadius:'12px'
  //, width:'100px'
  }

    return(
    <button style={estilos}>{texto}</button>
  )
}
export default Botones