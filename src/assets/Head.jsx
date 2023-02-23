import React from 'react'
import image1 from "../../public/images/image4.png";
import image2 from "../../public/images/image3.png";
import image3 from "../../public/images/image5.png";
import image4 from "../../public/images/image6.png";



const Head = () => {
  return (
    <div>
      <div className="headwrapper">
        <div className="headcontent">
            <h1>Rent a <span>Place</span> away from <br /> <span>Home</span> in the <span>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div>
                <input type="text" placeholder='Search for loaction' /><button className='btnsearch'>Search</button>
            </div>
        </div>
        <div className="headimage">
            <div className='headsep'>
                <div className='headimg1'>
                <img  className='headi' src={image1} alt="image1" width={"234px"}  height={"176px"}/> 

                <img className='headi'  src={image4} alt="image1" width={"234px"}  height={"176px"}/> 
                

                </div>
                <div className='headimg2'>
                
                <img className='headi'  src={image2} alt="image1" width={"234px"}  height={"176px"}/> 
                <img className='headi'  src={image3} alt="image1" width={"234px"}  height={"176px"} /> 


                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Head
