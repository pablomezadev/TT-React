import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Este componente recibe `isAuthenticated` (booleano) y `children` (la ruta protegida que intenta renderizar)
function RutaProtegida({ isAuthenticated, children, requiredRole }) {
  // const userRol = localStorage.getItem('rol');
  const { user } = useAuth();

  // Si el usuario NO está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // se redirige al usuario a login - *replace: Hace que el usuario no pueda volver para atrás.
  }

  // Si tiene que tener un rol específico y no lo cumple
  if (requiredRole && user?.rol !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, se renderiza el contenido protegido (por ejemplo, un dashboard)
  return children;
}

export default RutaProtegida;