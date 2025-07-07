// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const Checkout = () => {
//   const { cart, precioTotal } = useContext(CartContext);


//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Finalizar Compra</h2>
//       <ul className="list-group mb-4">
//         {cart.map((item) => (
//           <li key={item.id} className="list-group-item d-flex justify-content-between">
//             <span>{item.nombre} x{item.cantidad}</span>
//             <span>${(item.precio * item.cantidad).toFixed(2)}</span>
//           </li>
//         ))}
//       </ul>
//       <h4>Total: ${precioTotal.toFixed(2)}</h4>
//       <button className="btn btn-success mt-3" onClick={() => alert('Compra simulada completada')}>Confirmar Compra</button>
//       <Link to="/productos" className="btn btn-success btn-lg">
//         <i className="fa-solid fa-arrow-left me-2"></i>Seguir comprando
//       </Link>
//     </div>
//   );
// };

// export default Checkout;

import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './styles/checkout.css';

const Checkout = () => {
  const { cart, precioTotal, handleVaciarCarrito } = useContext(CartContext);
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    tarjeta: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.direccion || !formData.tarjeta) {
      Swal.fire('Faltan datos', 'Todos los campos son obligatorios.', 'warning');
      return;
    }

    setIsProcessing(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);

      const numeroFactura = Math.floor(100000000 + Math.random() * 900000000); // 9 dígitos aleatorios

      Swal.fire({
        icon: 'success',
        title: 'Compra Confirmada',
        html: `
          <p>Gracias por tu compra, <strong>${formData.nombre}</strong>!</p>
          <p><strong>Número de Factura:</strong> ${numeroFactura}</p>
          <p>Recibirás una copia de tu factura en:</p>
          <p><strong>${user?.email}</strong></p>
        `,
        confirmButtonText: 'Volver a productos'
      }).then(() => {
        handleVaciarCarrito();
        localStorage.removeItem('cart');
        navigate('/productos');
      });

    }, 2000);
  };

  return (
    // <div className="container mt-5">
    <div className="container my-4 mt-0 p-2 border rounded bg-white">
      <h2 className="mb-3 text-center">Finalizar Compra</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>No hay productos en el carrito.</p>
          <button><Link to='/'>Volver a la página de inicio</Link></button>
        </div>
      ) : (
        <>
          <section className="container my-4 mt-0 p-2 border rounded bg-white" style={{ maxWidth: '1200px' }}>
            <ul className="list-group mb-4">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex align-items-center gap-3">
                    <img src={item.imagen} alt={item.nombre} className="checkout-img" />
                    <div>
                      <p className="mb-0">{item.nombre} x{item.cantidad}</p>
                      <small className="text-muted">Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</small>
                    </div>
                  </div>
                  <span><b>${(item.precio * item.cantidad).toFixed(2)}</b></span>
                </li>
              ))}
            </ul>



            {/* <form onSubmit={handleSubmit} className="checkout-form mb-4"> */}
            {/* <form onSubmit={handleSubmit} className="checkout-form mb-4">
              <div className="form-group mb-3">
                <label>Nombre completo</label>
                <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} />
              </div>

              <div className="form-group mb-3">
                <label>Dirección de envío</label>
                <input type="text" className="form-control" name="direccion" value={formData.direccion} onChange={handleChange} />
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={user?.email || ''} disabled />
              </div>

              <div className="form-group mb-3">
                <label>Número de tarjeta</label>
                <input type="text" className="form-control" name="tarjeta" placeholder="**** **** **** 1234" value={formData.tarjeta} onChange={handleChange} />
              </div>

              <div className="col-lg-4 p-3 border rounded">
                <div className="d-grid gap-3 my-4">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isProcessing}>
                    {isProcessing ? 'Procesando pago...' : 'Confirmar Compra'}
                  </button>
                </div>

                <div className="d-grid gap-3 my-4">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isProcessing}>
                    {isProcessing ? 'Procesando pago...' : 'Seguir comprando'}
                  </button>
                </div>

              </div>
            </form> */}

            <form onSubmit={handleSubmit} className="checkout-form mb-4">
              <div className="row">
                {/* Columna izquierda: formulario */}
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <label>Nombre completo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Dirección de envío</label>
                    <input
                      type="text"
                      className="form-control"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={user?.email || ''}
                      disabled
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Número de tarjeta</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tarjeta"
                      placeholder="**** **** **** 1234"
                      value={formData.tarjeta}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Columna derecha: total + botones */}
                <div className="col-md-4 mt-4 mt-md-0">
                  <div className="p-3 border rounded h-100 d-flex flex-column justify-content-between">
                    {/* Total siempre arriba */}
                    <div >
                      <h4 className="mb-4 text-md-start text-start">SubTotal: ${precioTotal.toFixed(2)}</h4>
                      <h3 className="mb-4 text-md-start text-start" style={{backgroundColor:"#e9ecef"}}><b>Total: ${precioTotal.toFixed(2)}</b></h3>
                    </div>

                    {/* Botones siempre abajo */}
                    <div className="d-flex flex-column flex-md-row gap-3 mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg flex-fill"
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Procesando pago...' : 'Confirmar Compra'}
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg flex-fill"
                        onClick={() => navigate('/productos')}
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Procesando pago...' : 'Seguir comprando'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>


          </section>
        </>
      )}
    </div>
  );
};

export default Checkout;