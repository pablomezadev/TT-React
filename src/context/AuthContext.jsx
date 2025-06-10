import {createContext,useEffect,useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar al usuario después de la autenticación
import { CartContext } from './CartContext'; // Importamos el contexto del carrito para actualizar el estado de autenticación

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState({});
    const navigate = useNavigate(); //  para redireccionar al usuario
    // const [isAuthenticated , setIsAuthenticated] = useState(false);
    
    const { setIsAuthenticated } = useContext(CartContext); // para actualizar el estado de autenticación desde carrito
    

    useEffect(() => {
        // Verificamos si el usuario ya está autenticado
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Verificamos si el usuario está autenticado
        if (isAuthenticated) {
            setIsAuthenticated(true); // Actualizamos el estado de autenticación
            navigate('/admin'); // Redireccionamos a la ruta protegida
        }

    }, []); // Dependencias del useEffect
    // useEffect se ejecuta una vez al montar el componente y verifica si el usuario ya está autenticado
    // Si el usuario ya está autenticado, actualiza el estado de autenticación y redirecciona a la ruta protegida

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
        localStorage.setItem('isAuthenticated', 'true'); // Guardamos el estado de autenticación en localStorage
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
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, errors, handleSubmit }}>
        {children}
        </AuthContext.Provider>
    );

}

// useAuth es un hook personalizado que nos permite acceder al contexto de autenticación en cualquier componente
// Esto nos permite evitar tener que usar useContext(AuthContext) directamente en cada componente  
// y hace que el código sea más limpio y fácil de mantener
// useContext es un hook de React que nos permite acceder al contexto creado con createContext
export const useAuth = () => useContext(AuthContext); // Hook personalizado para acceder al contexto de autenticación

