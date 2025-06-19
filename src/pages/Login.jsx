import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/styleLogin.css'
import { useAuth } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'; // 

function Login() {
  const { email, setEmail, password, setPassword, errors, handleSubmit } = useAuth();

  // console.log("estado de error: " + JSON.stringify(errors))
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="formBasicEmail">
          Email:
          <input
            id="formBasicEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
            placeholder="ejemplo@correo.com"
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
        </label>
        <label>
          Contraseña:
          <input htmlFor="formBasicPassword"
            id="formBasicPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
            placeholder="Password"
            style={{
              padding: '0.5rem',
              border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
              borderRadius: '0.25rem',
            }}
          />
        </label>
        {/* {errors && <p className="error-msg">{errors.email}</p>} */}
        {/* {console.log("error password: " + errors.password)} */}
        {errors.password && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.password}
          </div>
        )}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
