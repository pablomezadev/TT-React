import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, precioTotal } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Finalizar Compra</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            <span>{item.nombre} x{item.cantidad}</span>
            <span>${(item.precio * item.cantidad).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h4>Total: ${precioTotal.toFixed(2)}</h4>
      <button className="btn btn-success mt-3" onClick={() => alert('Compra simulada completada')}>Confirmar Compra</button>
    </div>
  );
};

export default Checkout;