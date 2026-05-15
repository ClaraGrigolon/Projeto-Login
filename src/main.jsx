import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Usuarios from './Usuarios'
import Listagem from './Listagem'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Usuarios />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)