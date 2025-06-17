import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import { ToastContainer } from 'react-toastify' 

// import { FaBoxOpen, FaShoppingCart, FaBars, FaEdit, FaTrash } from 'react-icons/fa';
import { FaBars, FaClipboardCheck, FaBox, FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/TT-React">
    {/* <Router > */}
      <StrictMode>
        <CartProvider>
          <AdminProvider>
            <AuthProvider>
              <App />
              {/* <ToastContainer /> */}
              <ToastContainer position="bottom-right" />
            </AuthProvider>
          </AdminProvider>
        </CartProvider>
      </StrictMode>
    {/* </Router> */}
  </BrowserRouter>,
)
