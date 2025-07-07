const isProduction = import.meta.env.MODE === 'production'; // Es inyectada automáticamente por Vite en tiempo de compilación

const API_BASE_URL = isProduction ? 
'https://686316c388359a373e93e1d3.mockapi.io/api':
'https://686316c388359a373e93e1d3.mockapi.io/api';


export const endpoints = {
  auth: `${API_BASE_URL}/apiAuth`,
};
