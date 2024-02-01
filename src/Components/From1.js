import React from 'react'
import './From1.css'

const From1 = () => {
  return (
    <div className='from1Container'>
        <div className='From1Box'>
            <div className='frominput'>
                <h3 >Name</h3>
                <input type='text' required autoFocus placeholder='Enter Name...'></input>
            </div>
            <div className='frominput'>
                <h3>Email</h3>
                <input type='email' required placeholder='Enter Email...'></input>
            </div>
            <div className='frominput'>
                <h3>Mobile Number</h3>
                <input type="number" required  placeholder='Enter Number...'></input>
            </div>
        </div>
    </div>
  )
}

export default From1