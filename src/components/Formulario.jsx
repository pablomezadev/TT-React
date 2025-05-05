import React, { useState } from 'react'

const Formulario = () => {
    const estilos = {backgroundColor:'lightgreen',margin:'10px', padding:'10px'
    }
    const [nombre, setNombre] = useState('')

    function manejarEnvio(evento){
        evento.preventDefault(); //evita "que se recargue la pagina"
        console.log(`valor nombre: ${nombre}`)
        alert(`El formulario de: ${nombre}, fue enviado con exito`)
        setNombre('')
        console.log(`estado nombre despues de evento: ${nombre}`)
    }

  return (
    <form style={estilos} onSubmit={manejarEnvio}>
        <h3>Formulario</h3>
        <input 
            type="text"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            placeholder='Ingresa tu nombre...'
        />
        <button type='submit' style={{margin:'10px'}}>Enviar</button>
    </form>
  )
}

export default Formulario