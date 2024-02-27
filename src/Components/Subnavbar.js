import React from 'react'
import im from './images/trak.png';
import line from './images/Line 11.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import './Subnavbar.css';

export const Subnavbar = () => {
  return (
    <>
    <div className='subnav'>
    <div className='leftsubnav'>
   
    <img src={im} alt='Delivery'></img>
    <p>Free Delivery</p>
  
     <img src={line} alt='Return Policy'></img>
        <p>Return Policy</p>
      
    </div>
    <div className='rightsubnav'>
        <div className='logbtn'>
        <p>Login</p>
        </div>
        <div className='SocialMedia'>
        <p>Follow US</p>
        <img src={facebook} alt="face"></img>
        <img src={linkedin} alt="linked"></img>
        <img src={twitter} alt="X"></img>
        <img src={insta} alt="insta"></img>
        </div>
    </div>
    </div>
    </>
  )
}

export default Subnavbar;