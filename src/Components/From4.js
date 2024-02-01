import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const From4 = ({cart,counterss,deccounters,setCart}) => {
    // const[storeitem, setStoreItem] =useState(cart)
  function handleDelete(item){
      const removeitem = cart.filter((product)=>{
    return item.id !== product.id
      })
      setCart(removeitem)
    
  }
  return (
    <div className='From4MainContainer'>
{
    cart.map((item)=>(
        <>
        <div className='From4Container'>
            <img src={item.image}></img>
            <div className='From4Infromation'>
               <h4>{item.title}</h4>
               <p>$ {item.price}</p>
               <div className='From4Counter'>
                <button onClick={()=>counterss(item)}><AddIcon></AddIcon></button>
               <p>{item.qun}</p>
               <button onClick={()=>deccounters(item)}><RemoveIcon></RemoveIcon></button>

               </div>
               <p onClick={()=>handleDelete(item)}>REMOVE</p>
            </div>
        </div>
        </>
    ))
}

    </div>
  )
}

export default From4