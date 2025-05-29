import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Router basename="/TT-React">
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
)
