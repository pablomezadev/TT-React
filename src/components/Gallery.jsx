import React from 'react'

const Gallery = () => {
    const promocionesGallery = [
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
      const estilos = {display:'flex',gap:'10px',justifyContent:'center', marginTop:'20px'}
  return (
    <section id='Gallery' style={estilos}>
        {
            promocionesGallery.map((promocion, index)=>(
                <img key={index} src={promocion.imagenUrl} alt={`imgagen ${index+1}`} />
            ))
        }
    </section>
  )
}

export default Gallery