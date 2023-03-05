import React from 'react'
import Navbar from "./assets/Navbar"
import './App.css'
import Head from './assets/Head'
import Ads from './assets/Ads';
import More from './assets/More';
// import Mot from "./assets/Mottttt";

const App = () => {
  return (
    <div>
         <div className="appContainer">
          <Navbar/>
          <Head/>
          <Ads/>
          {/* <Mot/> */}
          <More/>
          </div>
    </div>
  )
}

export default App
