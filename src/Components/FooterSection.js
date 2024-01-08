import React from 'react'

export const FooterSection = () => {

  
  return (
    <div className='footerContainer'>
   <div className='footerbox'>
    <div className='newslleter'>
        <h5>Newslleter</h5>
        <p>Get news about articles and updates in your inbox.</p>
    </div>
    <div className='inputsection'>
    
        <input type='text' name="name" placeholder='NAME'></input>
        <input type='email' name="email" placeholder='EMAIL'></input>
        <input type='text' placeholder='MESSAGE'></input>
        <div className='footerbtn'>
        <button>SEND</button>
    </div>
      
    </div>
   </div>
   <div className='footerboxbottam'>
    <div className='footerslogan'>
    <h1>Get</h1>
    <h1>in touch</h1>
    </div>
    
   
    
   
    
   </div>
    </div>
  )
}
