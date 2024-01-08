import React from 'react'
import model from './images/modelimg.png'
import star from './images/Star 3.png'
import star4 from './images/Star 4.png'
import seemore from './images/Primary Button.png'
import { useSelector } from 'react-redux'
import './HeroSction.css'
export const Herosection = () => {

  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <>
    <div className={'Herosectiondiv'+(lightTheme ?"" : " dark3")}>
        <div className='leftHerosection'>

            <h1 className={'fresh' +(lightTheme ?"" : " dark")}>Fresh</h1>
            <h1 className={'year'+(lightTheme ?"" : " year1")}>2022</h1>
            <h1 className={'look' +(lightTheme ?"" : " dark")}>Look</h1>
            <img src={star4}></img>
        </div>
       

        <div className='rightHerosection'>
            <div className='orgsqr'>
            <ul>
            <li>
            OREGON JACKET
            </li>
            <li>$ 124</li>
            </ul>
           
            </div>
            <div className='modelimg'>
                <img src={model}></img>
               
            </div>
            <div className='star'>
                <img src={star}></img>

            </div>
        </div>
        
    </div>
     <div className='seemore'>
     {/* <p>See More</p> */}
     <img className={'see' +(lightTheme ?"" : " see2")} src={seemore}></img>
     {/* <img src={vectorimg}></img> */}
 </div>
 </>
  )
}
// export default Herosection;