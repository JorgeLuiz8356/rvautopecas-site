import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { protegerContraEnquadramento } from './lib/antiEnquadramento'
import './index.css'

// Roda antes de desenhar a página: se o site estiver embutido no iframe
// de outro domínio, sai dele antes de mostrar qualquer coisa.
protegerContraEnquadramento()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
