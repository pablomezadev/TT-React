import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useFinalizarCompra = () => {
  const { isAuthenticated } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const finalizarCompra = () => {
    if (!isAuthenticated) {
      localStorage.setItem('postLoginRedirect', '/checkout');
      navigate('/login');
      return;
    }

    if (user?.rol === 'cliente') {
      navigate('/checkout');
    } else {
      toast.warn('Los administradores no pueden realizar compras');
      navigate('/admin');
    }
  };

  return finalizarCompra;
};
