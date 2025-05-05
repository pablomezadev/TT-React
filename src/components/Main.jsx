import React from 'react'

const Main = ({data}) => {
    // console.log(data);
    const estilos =  {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        boxSizing: 'border-box',
        /* agrega esto para que la img no se salga */
        img: {
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '1rem 0', /* opcional: espacios arriba/abajo */
        }
      };
    return (

        //defino desde por archivo EstilosGenerales.css
        <main className='main' style={estilos}> 
            <h2>Contenido principal</h2>
                <img style={estilos.img} src="https://cdn.pixabay.com/photo/2017/08/11/08/22/under-construction-2629947_1280.jpg" alt="sitioEnConstruccion" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa? 
                    Facere, corrupti quam minus laborum recusandae in eligendi itaque ex 
                    dolores quis ut, aliquid a quod. Impedit qui velit illum?
                </p>
        </main>
    )
}

export default Main