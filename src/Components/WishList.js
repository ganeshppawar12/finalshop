import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import './wishlist.css'
// import CircularIndeterminate from './CircularIndeterminate';


const WishList = ({wishlist,removefromwishList}) => {
  const lightTheme = useSelector((state) => state.themeKey);


   

    return (
        <div className='wishlistContainer' >
          {/* <div> */}
          <Link to="/">
            {" "}
            <h3 className={"cartheading"+(lightTheme ?"" : " dark3")}>
              <ArrowBackIcon></ArrowBackIcon> Back to Shooping
            </h3>{" "}
          </Link>
          <div className={"wishiteamlist"+(lightTheme ?"" : " dark")}>
          <h2 className={ "wishh2" +(lightTheme ?"" : " wishh22")} key={new Date() * 2}>Wish Cart - {wishlist.length} items</h2>
            <div className={"wishitamlistbox" +(lightTheme ?"" : " wishitamlistboxdark")}>
              {wishlist.length > 0 ? (
                wishlist.map((item,index) => (
                  <>
                    <div key={index} className={"wishitemCard" +(lightTheme ?"" : " wishitemCarddark")}>
                    <Link to={`/${item.id}`}>    <img src={item.image}></img></Link> 
                      <div className="itemInfor">
                      <Link to={`/${item.id}`}>      <h4>{item.title}</h4></Link> 
                        <p>{item.category}</p>
                        <p>Actual Price: ₹ {item.price} </p>
                        <div className="iteamdelete">
                          <div
                            onClick={(e) => removefromwishList(item,e)}
                            className="deletebtndiv"
                          >
                            <DeleteIcon className="deletebtn"></DeleteIcon>
                          </div>
                       
                        </div>
                      </div>
                    
                    </div>
                  </>
                ))
              ) : (
                <Link to="/">
                  {" "}
                  <div className="StartShopping">Start Shopping</div>
                </Link>
              )}
            </div>
           
          </div>
          {/* </div> */}
        </div>
  )
}

export default WishList