import React from 'react'
import Navbar from "./assets/Navbar"
import './App.css'
import Head from './assets/Head'
import Ads from './assets/Ads';
import More from './assets/More';

const App = () => {
  return (
    <div>
         <div className="appContainer">
          <Navbar/>
          <Head/>
          <Ads/>
          <More/>
          </div>
    </div>
  )
}

export default App
