import React, { useState, useContext } from 'react'
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // 

function Login() {

  const { setIsAuthenticated } = useContext(CartContext); // para actualizar el estado de autenticación desde carrito

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({});
  const navigate = useNavigate(); //  para redireccionar al usuario

  const handleSubmit = async (e) => { // función para manejar el envío del formulario // async para poder usar await dentro de ella
    // e es el evento del formulario  
    
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Simulamos autenticación básica (esto luego se reemplaza por backend real)
    let validationErrors = {} // objeto para almacenar claves /errores de validación
    if (!email) validationErrors.email = 'El email es requerido';
    if (!password) validationErrors.password = 'La contraseña es requerida';


    if (Object.keys(validationErrors).length > 0) { // object.keys retorna un array con las claves del objeto y // si su longitud es mayor a 0 significa que hay errores de validación
      setError(validationErrors); // Actualizamos el estado de error
      return; // Salimos si hay errores de validación
  }
  // Si no hay errores, procedemos con la autenticación
  // consumimos una API o validamos las credenciales desde data/users.json

  try {
    const res = await fetch('data/users.json')
    const users = await res.json()

    const foundUser = users.find((user) => user.email === email && user.password === password);
    if (!foundUser) {
      setError({ email: 'Credenciales inválidas' });
      return;
    }else {
      if (foundUser.role === 'admin') {
        setIsAuthenticated(true); // Actualizamos el estado de autenticación
        navigate('/admin'); // Redireccionamos a la ruta protegida
      }else{
        navigate('/'); // Redireccionamos a la ruta pública
      }
    }
      
  } catch (error) {
    setError({ email: 'Error al intentar iniciar sesión' });
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '480px',
        margin: 'auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Email address
        </label>
        <input
          id="formBasicEmail"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
            borderRadius: '0.25rem',
          }}
        />
        {errors.email && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.email}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Password
        </label>
        <input
          id="formBasicPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
            borderRadius: '0.25rem',
          }}
        />
        {errors.password && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Submit
      </button>
    </form>
  )
}

export default Login;