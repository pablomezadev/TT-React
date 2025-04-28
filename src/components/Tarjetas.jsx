import React from "react";
import Botones from "./Botones";

function Tarjeta({id, titulo, descripcion, imagenUrl, enlace, botonTexto, botonColor}){
    const estilos= {width: '300px', heigth: '100px !important', backgroundColor: 'white', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' };
    // console.log("url de tarjeta",imagenUrl)
    return(
        <div style={estilos} id={id}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <img src={imagenUrl} alt={enlace} />
            <Botones texto={botonTexto} color={botonColor}/>
        </div>
    );
}

export default Tarjeta