import React from 'react'


import image7 from "../images/image7.png"
import image8 from "../images/image8.png"
import image9 from "../images/image9.png"



const Learn = () => {
  return (
    <div className='learn'>
      <div className='learnContent'>
        <h1>Metabnb NFTs</h1>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <button><p>Learn more</p></button>
      </div>
      <div className='learnImg'>
<img className='image9' src={image9} alt="" />
<img className='image7' src={image7} alt="" />
<img className='image8' src={image8} alt="" />


      </div>
    </div>
  )
}

export default Learn
