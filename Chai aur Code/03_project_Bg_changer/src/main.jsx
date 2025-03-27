import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BgColor from './BgColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />   */}
    <BgColor />
  </StrictMode>,
)
