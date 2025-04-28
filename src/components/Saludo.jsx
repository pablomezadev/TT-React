import React from "react";

function Saludo2(params){
    const {nombre} = params
    console.log('parametros =', params)
    return(
        <h2>Hola "{nombre}" Soy un componente exportado desde un archivo componente jsx</h2>
    )
}

export default Saludo2 // exportamos por default porque esta unica funcion es lo unico que exportamos