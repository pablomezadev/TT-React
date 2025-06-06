import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/styleLogin.css'

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulamos autenticación básica (esto luego se reemplaza por backend real)
    if (email === 'admin@correo.com' && password === 'admin123') {
      setIsAuthenticated(true)
      navigate('/admin') // redireccionamos a ruta protegida
    } else {
      setError('Credenciales inválidas')
    }
  }

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ejemplo@correo.com"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </label>
        {error && <p className="error-msg">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
