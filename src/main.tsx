import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SagiLanding } from '../SagiLanding'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SagiLanding />
  </StrictMode>,
)
