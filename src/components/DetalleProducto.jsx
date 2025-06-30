import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
// import '../components/styles/DetalleProductos2.css';

function DetalleProducto() {
      const {
        cart, handleAddToCart,
        busqueda, setBusqueda, productosFiltrados
    }   = useContext(CartContext)

  const { id } = useParams();
  const { productos } = useContext(CartContext);
  const product = productos.find(prod => prod.id == id);
  const [currentIndex, setCurrentIndex] = useState(0);



  const [cantidad, setCantidad] = useState(1);
    const [agregado, setAgregado] = useState(false)
    // const increase = ()=>setCantidad(prev=> (prev < producto.rating.count ? prev + 1 : prev));
    const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

    const handleAgregar = () => {
    // agregarProducto({ ...producto, cantidad })
    handleAddToCart({ ...product, cantidad })
    setAgregado(true)
    setTimeout(() => {
      // setAgregado(false)
    }, 3000)
  }


  if (!product) return <p>Cargando...</p>;

  const {
    nombre,
    descripcion,
    precio,
    precioOriginal,
    imagen,
    marca,
    stock,
    color
  } = product;

  const allImages = Array.isArray(imagen) ? imagen : [imagen];

  return (
    <section className="container my-4 mt-0 p-2 border rounded bg-white" style={{ maxWidth: '1200px' }}>
      <div className="row g-3 p-0 flex-column flex-lg-row">
        {/* Galería de Imágenes */}

        {/* carousel boostrap incio */}
        <div id="carouselExampleIndicators" className="carousel slide col-lg-8 p-3 border rounded" 
          style={{ maxHeight:"600px"}}
        data-bs-ride="carousel"   data-bs-touch="true" data-bs-keyboard="true">
          <div className="carousel-indicators" style={{maxHeight:"200px"}}>
          {/* <div className="carousel-indicators" > */}
          {allImages.map((_, idx) => (
            <button
            key={`indicator-${idx}`}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
            style={{ backgroundColor:"gray", borderRadius:"20%",border: id === 0 ? '2px solid red' : '2px solid gray'}}
            
            />
          ))}
          </div>

          <div className="carousel-inner" >
            {allImages.map((img, id) => (
              <div key={id} className={`carousel-item ${id === currentIndex ? 'active' : ''}`}  style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: 'white', maxHeight:"550px" }}>
                <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  src={img}
                  alt={`Producto ${id + 1}`}
                  // className={`carousel-item ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(id)}
                  style={{height:"100%", width:"100%", objectFit:"contain"}}
                  // style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: 'white', maxHeight:"550px" }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"
            // style={{ backgroundColor:"transparent", borderRadius:"20%",border: id === 0 ? '2px solid red' : 'gray' }}
          >
            <span className="carousel-control-prev-icon" 
            style={{ backgroundColor:"gray", borderRadius:"40%",border: id === 0 ? '2px solid red' : '2px solid gray'}}
            aria-hidden="true"></span>
            <span className="visually-hidden" >Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" 
            style={{ backgroundColor:"gray", borderRadius:"40%",border: id === 0 ? '2px solid red' : '2px solid gray'}}
            aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* carousel boostrap fin */}


        {/* Información del Producto */}
        <div className="col-lg-4 p-3 border rounded">
          <p className="text-muted small">Nuevo | +100 vendidos</p>
          <h2>{nombre}</h2>

          <div className="mb-3">
            {precioOriginal && (
              <span className="text-muted text-decoration-line-through me-2">
                ${precioOriginal}
              </span>
            )}
            <span className="fs-4 fw-bold text-dark">${precio}</span>
          </div>

          <p><strong>Color:</strong> {color || 'N/A'}</p>
          <p><strong>Stock disponible:</strong> {stock || '1'}</p>

          <div className="d-grid gap-3 my-4">
            <button className="btn btn-secondary btn-lg" onClick={handleAgregar}>
              <i className="fa-sharp fa-solid fa-cart-shopping me-2"></i>Agregar al carrito
            </button>
            <button className="btn btn-primary btn-lg">
              <i className="fa-solid fa-bag-shopping me-2"></i>Finalizar compra
            </button>
            <Link to="/productos" className="btn btn-success btn-lg">
              <i className="fa-solid fa-arrow-left me-2"></i>Seguir comprando
            </Link>
          </div>

          <h5 className="mt-4">Detalles del producto</h5>
          <ul className="list-unstyled">
            <li><strong>Marca:</strong> {marca || 'Genérica'}</li>
            <li><strong>Descripción:</strong> {descripcion}</li>
            {/* <li><strong>Stock:</strong> {stock}</li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;

