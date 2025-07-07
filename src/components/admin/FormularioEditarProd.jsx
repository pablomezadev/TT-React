// import { use, useState,useEffect } from 'react'

// function FormularioEditarProd({ productoSeleccionado, onActualizarProducto, onCancelar }) {
//     const [producto, setProducto] = useState({});


//     // useEffect para cargar el producto seleccionado
//     useEffect(() => {
//             setProducto(productoSeleccionado);
//     }, [productoSeleccionado]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProducto({ ...producto, [name]: value });
//     }

//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             onActualizarProducto(producto);
//         }} className="formulario-editar-producto">
//             <h2>Editar Producto</h2>
//             <div>
//                 <label htmlFor='id'>ID:</label>
//                 <input type="text"
//                     name='id'
//                     value={producto.id || ''}
//                     onChange={handleChange} readOnly />
//             </div>
//             <div>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input type="text"
//                     name='nombre'
//                     value={producto.nombre || ''}
//                     onChange={handleChange} required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="precio">Precio:</label>
//                 <input type="number"
//                     name='precio'
//                     value={producto.precio || ''}
//                     onChange={handleChange} required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="descripcion">Descripción:</label>
//                 <textarea name='descripcion'
//                     value={producto.descripcion || ''}
//                     onChange={handleChange} required></textarea>
//             </div>
//             <div>
//                 <label htmlFor='imagen'>Imagen URL:</label>
//                 <input type="text"
//                     name='imagen'
//                     value={producto.imagen || ''}
//                     onChange={handleChange} required />
//             </div>
//             <button type="submit" >Actualizar Producto</button>
//             <button type="button" onClick={onCancelar}>Cancelar</button>
//         </form>
//     )
// }

// export default FormularioEditarProd

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

function FormularioEditarProd({ productoSeleccionado, onActualizarProducto, onCancelar }) {
  const [producto, setProducto] = useState({});
  const [imagenesAdicionales, setImagenesAdicionales] = useState([]);

  useEffect(() => {
    setProducto(productoSeleccionado);
    if (Array.isArray(productoSeleccionado?.imagen)) {
      setImagenesAdicionales(productoSeleccionado.imagen.slice(1));
      setProducto(p => ({ ...p, imagen: productoSeleccionado.imagen[0] || '' }));
    } else {
      setImagenesAdicionales([]);
    }
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleImagenChange = (index, value) => {
    const nuevas = [...imagenesAdicionales];
    nuevas[index] = value;
    setImagenesAdicionales(nuevas);
  };

  const eliminarCampoImagen = (index) => {
    const nuevas = [...imagenesAdicionales];
    nuevas.splice(index, 1);
    setImagenesAdicionales(nuevas);
  };

  const agregarCampoImagen = () => {
    if (imagenesAdicionales.length < 5) {
      setImagenesAdicionales([...imagenesAdicionales, '']);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagenes = [producto.imagen, ...imagenesAdicionales.filter(Boolean)];

        const confirm = await Swal.fire({
      title: '¿Confirmar edición?',
      text: '¿Deseas realizar la modificacion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, confirmar',
      cancelButtonText: 'Cancelar',
    });

    if (confirm.isConfirmed) {
      onActualizarProducto({ ...producto, imagen: imagenes });
      // Swal.fire('Actualizado', 'producto fue Actualizado en el itinerario', 'success');
      toast.success('El producto Actualizado correctamente',
             {
                autoClose: 2000,
                position: "top-center"
            });
    }
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content rounded-4 shadow-lg">
          <form onSubmit={handleSubmit} className="needs-validation p-3">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title fw-bold">Editar Producto</h5>
              <button type="button" className="btn-close" onClick={onCancelar}></button>
            </div>

            <div className="modal-body row g-4">
              <div className="col-md-6">
                <label className="form-label">ID:</label>
                <input type="text" name="id" value={producto.id || ''} className="form-control mb-2" readOnly />

                <label className="form-label">Nombre:</label>
                <input type="text" name="nombre" value={producto.nombre || ''} onChange={handleChange} className="form-control mb-2" required />

                <label className="form-label">Precio:</label>
                <input type="number" name="precio" value={producto.precio || ''} onChange={handleChange} className="form-control mb-2" required />
                
                <label className="form-label">Stock:</label>
                <input type="number" name="stock" value={producto.stock || ''} onChange={handleChange} className="form-control mb-2" required />

                <label className="form-label">Descripción:</label>
                <textarea name="descripcion" value={producto.descripcion || ''} onChange={handleChange} className="form-control mb-2" rows={4} required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Imagen principal:</label>
                <input type="text" name="imagen" value={producto.imagen || ''} onChange={handleChange} className="form-control mb-2" required />
                {isValidUrl(producto.imagen) && (
                  <img src={producto.imagen} alt="preview" className="img-fluid mt-2 rounded shadow-sm border" style={{ maxHeight: '200px' }} />
                )}

                <label className="form-label mt-3">Imágenes adicionales:</label>
                {imagenesAdicionales.map((img, idx) => (
                  <div key={idx} className="input-group mb-2">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => handleImagenChange(idx, e.target.value)}
                      className="form-control"
                      placeholder={`Imagen adicional ${idx + 1}`}
                    />
                    <button type="button" className="btn btn-outline-danger" onClick={() => eliminarCampoImagen(idx)}>
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                ))}

                {imagenesAdicionales.length < 5 && (
                  <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={agregarCampoImagen}>
                    + Agregar otra imagen
                  </button>
                )}

                <div className="mt-3 d-flex flex-wrap gap-2">
                  {imagenesAdicionales.map((img, idx) => (
                    isValidUrl(img) ? (
                      <img
                        key={`preview-${idx}`}
                        src={img}
                        alt={`preview-${idx}`}
                        className="img-thumbnail shadow-sm"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    ) : null
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer border-top-0 mt-3">
              <button type="submit" className="btn btn-primary px-4">Actualizar</button>
              <button type="button" className="btn btn-secondary px-4" onClick={onCancelar}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioEditarProd;