import {useState} from 'react'

function Contador () {

    console.log(useState())
    const [contador,setContador]= useState(0)
  return (
    <div>
        <h3>
            valor del contador: {contador}
        </h3>
        <button onClick={()=>{setContador(contador+1)}}>
            Incrementar
        </button>
        <button onClick={()=>{setContador(contador-1)}}>
            Decrementar
        </button>
        <button onClick={()=>{setContador(0)}}>
            Reiniciar
        </button>
    </div>
  )
}

export default Contador