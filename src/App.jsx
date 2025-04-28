import { useState } from 'react'
import './EstilosGenerales.css' // ex -> './App.css' 
import Saludo2 from './components/Saludo'
import Botones from './components/Botones'
import ListaDeProductos from './components/ListaDeProductos'
import Tarjeta from './components/Tarjetas'

function Saludo(){
  return(
    <h1>Soy El primer componente "saludo"</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)
  let productos = ['producto1','producto2','producto3','producto4']

  const promociones = [
    {
      id: 1,
      titulo: '¡Descuento de Verano!',
      descripcion: 'Aprovecha hasta un 50% de descuento en toda la tienda.',
      imagenUrl: 'https://placehold.co/200x200',
      enlace: '/descuentos-verano'
    },
    {
      id: 2,
      titulo: 'Rebajas de Invierno',
      descripcion: 'Abrigos y ropa de invierno hasta 60% OFF.',
      imagenUrl: 'https://placehold.co/200x200?text=Invierno',
      enlace: '/rebajas-invierno'
    },
    {
      id: 3,
      titulo: 'Ofertas para el Día de la Madre',
      descripcion: 'Regalos especiales con descuentos de hasta el 40%.',
      imagenUrl: 'https://placehold.co/200x200?text=Día+de+la+Madre',
      enlace: '/ofertas-dia-madre'
    },
    {
      id: 4,
      titulo: 'Cyber Monday',
      descripcion: 'No te pierdas nuestras ofertas exclusivas en tecnología.',
      imagenUrl: 'https://placehold.co/200x200?text=Cyber+Monday',
      enlace: '/cyber-monday'
    },
    {
      id: 5,
      titulo: 'Semana del Deporte',
      descripcion: 'Artículos deportivos hasta 30% OFF.',
      imagenUrl: 'https://placehold.co/200x200?text=Deportes',
      enlace: '/semana-deporte'
    },
    {
      id: 6,
      titulo: 'Especial de Viajes',
      descripcion: 'Accesorios para viajeros con precios imperdibles.',
      imagenUrl: 'https://placehold.co/200x200?text=Viajes',
      enlace: '/especial-viajes'
    }
  ];
  


  return (
    <>
      <Saludo/>
      <Saludo2 nombre='juan' edad='25'/>
      <Botones texto='Aceptar' color='blue'/>
      <Botones texto='Cancelar' color='red'/>
      <Botones texto='Ver mas' color='green'/>
      <ListaDeProductos productos={productos}/>

      <div id='promociones' className='Tarjeta'>
        {
          promociones.map((promocion)=>
          <Tarjeta id={promocion.id} titulo={promocion.titulo}
          imagenUrl={promocion.imagenUrl}
            descripcion={promocion.descripcion}
            botonTexto='Ver mas'
            botonColor='Blue'
          /> 
        )
        }
      </div>

    </>
  )
}

export default App
