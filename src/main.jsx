import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import keycloak from './auth/keycloak'

keycloak.init({
  onLoad: 'check-sso', // não força login
  pkceMethod: 'S256',
}).then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}).catch(() => {
  console.error("Erro ao inicializar o Keycloak")
})
