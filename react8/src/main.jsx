
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Auth from './Auth/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth>
    <App />
    </Auth>
    </BrowserRouter>
  
)
