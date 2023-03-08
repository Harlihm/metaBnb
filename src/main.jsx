import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import './AppResponsiveness.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>

  </React.StrictMode>
)
