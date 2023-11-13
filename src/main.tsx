import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './config/Routing/Routing'
import './index.css'
// import { AuthProvider } from 'react-auth-kit'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
