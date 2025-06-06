import React from 'react';
import { Navigate } from 'react-router-dom';

// Este componente recibe `isAuthenticated` (booleano) y `children` (la ruta protegida que intenta renderizar)
function RutaProtegida({ isAuthenticated, children }) {

  // Si el usuario NO está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // se redirige al usuario a login - *replace: Hace que el usuario no pueda volver para atrás.
  }

  // Si está autenticado, se renderiza el contenido protegido (por ejemplo, un dashboard)
  return children;
}

export default RutaProtegida;