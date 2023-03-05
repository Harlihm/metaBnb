import React, { useState } from 'react'
import "./Connectwallet.css"
import metamasklogo from "../images/image66.png";
import wallconlogo from "../images/image69.png";
import {RxCross1} from "react-icons/rx";


const Connectwallet = () => {

const [modal , setModal]=useState(false);
const toggleModal =()=>{
setModal(!modal);
};

  return (

    <div>
       <button onClick={toggleModal} className='connectwallet'>
              Connect Wallet
         </button>

         {modal && <div className='modal'>
                 <div className="overlay" onClick={toggleModal}>
                    <div className="modalconent">
                        <div className="conn">
                            <p>Connect Wallet</p>
                            <button onClick={toggleModal}> <RxCross1/></button>
                        </div>
                        <span></span>
                        <div className='wallswalls'>
                        <p className='pp'>Choose Your Preferred Wallet</p>
                        <div className='wallets'>
                            <div className='walls' >
                               <div>
                                <img src={metamasklogo} alt="" />
                               <a href="">
                                    MetaMask
                                </a>
                               </div>
                               <button> &gt;</button>


                            </div>
                            <div className='walls'> 
                                <div>
                                    <img src={wallconlogo} alt="" />
                                    <a href="">
                                    Walletconnect
                                </a>
                                </div>
                                 <button>&gt;</button>
                            </div>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>}


    </div>
  )
}

export default Connectwallet
