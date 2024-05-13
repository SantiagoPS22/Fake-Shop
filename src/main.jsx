import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './Components/Context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <App />
  </ShopProvider>,
)
