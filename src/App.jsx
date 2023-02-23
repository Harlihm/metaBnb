import React from 'react'
import Navbar from "./assets/Navbar"
import './App.css'
import Head from './assets/Head'
import Ads from './assets/Ads';

const App = () => {
  return (
    <div>
         <div className="appContainer">
          <Navbar/>
          <Head/>
          <Ads/>
          </div>
    </div>
  )
}

export default App
