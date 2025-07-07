import { createContext, useEffect, useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar al usuario después de la autenticación
import { CartContext } from './CartContext'; // Importamos el contexto del carrito para actualizar el estado de autenticación
import { endpoints } from '../config/apiConfig';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({});
  const navigate = useNavigate(); //  para redireccionar al usuario    
  const { setIsAuthenticated, isAuthenticated } = useContext(CartContext); // para actualizar el estado de autenticación desde carrito
  const urlApiAuth = endpoints.auth;
  const [user, setUser] = useState(null);

  //   useEffect(()=>{
  //   const isAuth = localStorage.getItem('isAuthenticated') === 'true'
  //   if(isAuth && localStorage.getItem("rol") === "admin"){
  //     setIsAuthenticated(true)
  //     navigate('/admin')
  //   }
  // },[])

  function parseToken(token) {
    try {
      const decoded = atob(token);
      const [email, rol] = decoded.split(':');
      return { email, rol };
    } catch (err) {
      return null;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';

    if (token && isAuth) {
      // console.log("Token code: ", token)
      const userData = parseToken(token);
      // console.log("userData code: ", userData)
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);

        // Redirigir a admin si aplica
        if (userData.rol === 'admin') {
          navigate('/admin');
        }
      }
    }
  }, []);


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
      const res = await fetch(urlApiAuth);
      const users = await res.json();

      const matchedUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!matchedUser) {
        setError({ general: 'Credenciales inválidas' });
        return toast.error('Email o contraseña incorrectos');
      }

      // Generacion de "token" falso (solo para pruebas)
      const fakeToken = btoa(`${matchedUser.email}:${matchedUser.rol}`);

      localStorage.setItem('token', fakeToken);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('email', matchedUser.email);
      // if(matchedUser.rol=== 'cliente') {localStorage.setItem('postLoginRedirect', '/checkout')} 

      setIsAuthenticated(true);
      // setUser(matchedUser);
      const userData = { email: matchedUser.email, rol: matchedUser.rol };
      setUser(userData);

      toast.success('Inicio de sesión exitoso');

      // Definimos la redirección según el rol del usuario y naveegacion
      if (matchedUser.rol === 'cliente') {
        // Si el usuario es cliente y hay una redirección post-login, lo redirigimos a checkout
        localStorage.getItem('postLoginRedirect') === '/checkout' ? navigate('/checkout') :
          navigate('/'); // Redirigimos al usuario a la página de inicio
      } else if (matchedUser.rol === 'admin') {
        navigate('/admin'); // Redirigimos al usuario a la página de administración
      }
      matchedUser.rol === 'admin' ? navigate('/admin') : "";

    } catch (error) {
      console.error('Error al autenticar:', error);
      setError({ general: 'Error al conectar con el servidor' });
      toast.error('Error del servidor');
    }
  };

  // logout
  const logOut = () => {
    Swal.fire({
      title: '¿Cerrar Sesion?',
      text: 'Esta acción cerrará su sesion actual',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          if (localStorage.getItem('isAuthenticated')) {
            setIsAuthenticated(false)
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem("postLoginRedirect");
          }
          localStorage.setItem('isAuthenticated', false);
          // console.log("localStorageGetToken despues de logOut: ", localStorage.getItem('token'))
          setUser(null);
          navigate('/login'); // Redirigimos al usuario a la página de inicio después de cerrar sesión
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
        Swal.fire('Sesion', 'La Sesion fué cerra con exito', 'success');
      }
    });
  }


  return (
    <AuthContext.Provider value={{
      email, setEmail, password, setPassword, errors, handleSubmit, logOut,
      user, isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );

}

// useAuth es un hook personalizado que nos permite acceder al contexto de autenticación en cualquier componente
// Esto nos permite evitar tener que usar useContext(AuthContext) directamente en cada componente  
// y hace que el código sea más limpio y fácil de mantener
// useContext es un hook de React que nos permite acceder al contexto creado con createContext
export const useAuth = () => useContext(AuthContext); // Hook personalizado para acceder al contexto de autenticación   