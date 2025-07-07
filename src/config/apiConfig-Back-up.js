const isProduction = import.meta.env.MODE === 'production'; // Es inyectada automáticamente por Vite en tiempo de compilación

const API_BASE_URL = isProduction ? 
'https://68521dae8612b47a2c0c1dd5.mockapi.io':
'https://68521dae8612b47a2c0c1dd5.mockapi.io';
  // ? 'https://services-6hx7.onrender.com/api/auth'
  // : 'http://localhost:3000/api/auth';


export const endpoints = {
  login: `${API_BASE_URL}/login`,
  register: `${API_BASE_URL}/register`,
  logout: `${API_BASE_URL}/logout`,
  protegido: `${API_BASE_URL}/protegido`,
};
