import React from 'react'
import Navbar from "./assets/Navbar"
import './App.css'

import Head from './assets/Head'
import Ads from './assets/Ads';
import More from './assets/More';
import Learn from './assets/Learn';
import Footer from './assets/Footer';

const App = () => {
  return (
    <div>
         <div className="appContainer">
          <Navbar/>
          <Head/>
          <Ads/>
          <More/>
          <Learn/>
          <Footer/>
          </div>
    </div>
  )
}

export default App
