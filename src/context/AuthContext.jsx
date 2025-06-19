import { createContext, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redireccionar al usuario después de la autenticación
import { CartContext } from './CartContext'; // Importamos el contexto del carrito para actualizar el estado de autenticación
import { endpoints } from '../config/apiConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({});
  const navigate = useNavigate(); //  para redireccionar al usuario    
  const { setIsAuthenticated, isAuthenticated } = useContext(CartContext); // para actualizar el estado de autenticación desde carrito
  // // const urlApiLogin = "http://localhost:3000/api/auth/login";
  // const urlApiLogin = "https://services-6hx7.onrender.com/api/auth/login";

  // // const urlApiProtegida = "http://localhost:3000/api/auth/protegido";
  // const urlApiProtegida = "https://services-6hx7.onrender.com/api/auth/protegido";

  // // const urlApiRegister = "http://localhost:3000/api/auth/register";
  // const urlApiRegister = "https://services-6hx7.onrender.com/api/auth/register";

  // // const urlApiLogOut = "http://localhost:3000/api/auth/logout";
  // const urlApiLogOut = "https://services-6hx7.onrender.com/api/auth/logout";
  const urlApiLogin = endpoints.login;
  const urlApiProtegida = endpoints.protegido;
  const urlApiRegister = endpoints.register;
  const urlApiLogOut = endpoints.logout;
  const [protectedUserData, setProtectedUserData] = useState({});
  const [user, setUser] = useState(null);


  // useEffect(() => {
  //   // Verificamos si el usuario ya está autenticado
  //   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Verificamos si el usuario está autenticado
  //   if (isAuthenticated) {
  //     setIsAuthenticated(true); // Actualizamos el estado de autenticación
  //     navigate('/admin'); // Redireccionamos a la ruta protegida
  //   }

  // }, []); // Dependencias del useEffect
  // useEffect se ejecuta una vez al montar el componente y verifica si el usuario ya está autenticado
  // Si el usuario ya está autenticado, actualiza el estado de autenticación y redirecciona a la ruta protegida

  // revalidar por recarga de pagina:
  // useEffect(() => {
  //   // Verificamos si el usuario ya está autenticado
  //   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Verificamos si el usuario está autenticado
  //   // console.log("authContext useEffect isAuthenticated: ",isAuthenticated)
  //   if (isAuthenticated) {
  //     console.log("usuario autenticado ok")
  //     // console.log("userData: ",userData.user);

  //     // if (userData.user.rol === "admin") {
  //     //   setIsAuthenticated(true); // Actualizamos el estado de autenticación
  //     //   navigate('/admin'); // Redireccionamos a la ruta protegida
  //     // } else {
  //     //   setIsAuthenticated(true); // Actualizamos el estado de autenticación
  //     //   navigate('/'); // Redireccionamos a la ruta protegida
  //     // }

  //   }

  // }, []); // Dependencias del useEffect

  useEffect(() => {
    const verificarSesion = async () => {

      try {
        const res = await fetch(urlApiProtegida, {
          method: "GET",
          credentials: "include", // habilita credential
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Token inválido o expirado");

        const userData = await res.json();
        console.log("Usuario revalidado:", userData.user);

        setIsAuthenticated(true);
        // setUser(userData.user);

        // Redirigir según el rol si estamos en página pública o de login
        const currentPath = window.location.pathname;
        if (currentPath === "/login" || currentPath === "/") {
          if (userData.user.rol === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.warn("Sesión inválida:", error.message);
        logOut();
      }
    };

    verificarSesion();
  }, []);




  // consulta datos al backend, capturamos datos de usuario y definimos navegacion
  // const definirRol = (token) => {
  //   useEffect(() => {
  //     // Verificamos si el usuario ya está autenticado
  //     const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Verificamos si el usuario está autenticado
  //     // console.log("authContext useEffect isAuthenticated: ",isAuthenticated)


  //     if (isAuthenticated) {
  //       console.log("usuario autenticado ok")
  //       setIsAuthenticated(true); // Actualizamos el estado de autenticación
  //       navigate('/admin'); // Redireccionamos a la ruta protegida
  //     }

  //   }, []); // Dependencias del useEffect

  // }

  //control vencimiento token y obtencion de datos usuario:
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //         navigate("/login");
  //         return;
  //     }

  //     fetch("http://localhost:3000/api/protected/dashboard", {
  //         headers: {
  //             Authorization: `Bearer ${token}`,
  //         },
  //     })
  //         .then((res) => {
  //             if (!res.ok) throw new Error("No autorizado");
  //             return res.json();
  //         })
  //         .then((data) => setData(data))
  //         .catch(() => {
  //             setIsAuthenticated(false)
  //             localStorage.removeItem("token");
  //             localStorage.removeItem("isAuthenticated");
  //             navigate("/login");
  //         });
  // }, [navigate]);






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

    try { // 1. Login → obtener token
      // console.log(`{"username":${JSON.stringify(email)},"password":${JSON.stringify(password)} }`)
      const res = await fetch(urlApiLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // habilita credential
        body: JSON.stringify({ email, password }),
        // body: `{"email":${JSON.stringify(email)},"password":${JSON.stringify(password)} }`
      });

      const data = await res.json();

      // if (res.ok) {
      //   localStorage.setItem("token", data.token);
      //   console.log("respuesta api login: ",res)
      //   navigate("/admin");
      // }

      // if (!res.ok || !data.token) {
      if (!res.ok) {
        console.log("menesaje: ", data.message)
        setError({ general: data.message || "Credenciales inválidas" });
        return;
      }

      // const token = data.token;
      // localStorage.setItem("token", token);

      // console.log("token = ", token)

      // 2. Usar token para consultar info del usuario
      const userRes = await fetch(urlApiProtegida, {
        method: "GET",
        credentials: "include",
        headers: {
          // "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const userData = await userRes.json();
      // console.log("userData.user : ", JSON.stringify(userData.user));
      // console.log("userData.user.rol: ", JSON.stringify(userData.user.rol));

      if (!userRes.ok) {
        setError({ general: userData.message || "Error al obtener datos del usuario" });
        return;
      }


      const rol = userData.user.rol;
      // console.log("Rol del usuario:", rol);

      // 3. Todo OK → marcar como autenticado y redirigir
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);

      setUser(userData.user);


      if (rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }


      // console.log("data tiene: ", data)
      // console.log("authContext handleSubmit - isAuthenticated: ", isAuthenticated)
      // if (res.ok && data.token) {
      //   console.log("data: ", data)
      //   localStorage.setItem("token", data.token);
      //   localStorage.setItem("isAuthenticated", "true"); // ahora sí se detectará
      //   setIsAuthenticated(true); // útil si querés usar el contexto en otros lados

      //   // reemplazar esto por consulta al back con token desde front
      //   // y redireccionar segun rol devuelto por el back end

      //   console.log("role: ", data.rol)
      //   if (data.rol === "admin") {
      //     navigate("/admin");
      //   } else {
      //     navigate("/")
      //   }
      // } else {
      //   navigate("/");
      //   // setError("Mensaje: ", data.message || "Error al iniciar sesión");
      //   setError({ general: data.message || "Error al iniciar sesión" });

      // }
    } catch (err) {
      setError("Error de red o del servidor");
    }
  };

  // logout
  const logOut = async () => {
    // setIsAuthenticated(false);
    // localStorage.removeItem('isAuthenticated');
    // localStorage.removeItem('token');

    // setIsAuthenticated(false);

    try {
      await fetch(urlApiLogOut, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      navigate('/login');
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }


  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, errors, handleSubmit, logOut }}>
      {children}
    </AuthContext.Provider>
  );

}

// useAuth es un hook personalizado que nos permite acceder al contexto de autenticación en cualquier componente
// Esto nos permite evitar tener que usar useContext(AuthContext) directamente en cada componente  
// y hace que el código sea más limpio y fácil de mantener
// useContext es un hook de React que nos permite acceder al contexto creado con createContext
export const useAuth = () => useContext(AuthContext); // Hook personalizado para acceder al contexto de autenticación