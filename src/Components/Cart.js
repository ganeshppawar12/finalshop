import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector } from "react-redux";
import {Context} from '../Context/Context'

import './cart.css'
const Cart = () => {

  const CartItems = useContext(Context);
  const {cart,setCart,counterss,deccounters,colors,openfrom,addWishList} = CartItems;
  const [subtotal, setSubtotal] = useState();
  const [Shipping, setShipping] = useState(5 * cart.length);
  const lightTheme = useSelector((state) => state.themeKey);

  function handleDelete(item, index) {
    let fillterData = cart.filter((id, index) => {
      return id.id !== item.id;
    });
    setCart(fillterData);

    
    toast.success("Item Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  let total = document.querySelectorAll(".total");

  function totalAmount(event) {
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      sum += Number(total[i].innerText);
    }

    setSubtotal(sum);
  }

  useEffect(() => {
    totalAmount();
    localStorage.getItem("subtotal", JSON.stringify(subtotal));
 
  }, [subtotal, setSubtotal, total,  cart]);

  return (
    <>
    

    <div style={{ height:"100vh" }}>
      <Link to="/">
        {" "}
        <h3 className={"cartheading" +(lightTheme ?"" : " dark3")}>
          <ArrowBackIcon></ArrowBackIcon> Back to Shooping
        </h3>{" "}
      </Link>
      <div className="iteamlist">
        <div className="itamlistbox">
          <h2>Cart - {cart.length} items</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <>
                <div key={item.id} className="itemCard">
                  <Link to={`/${item.id}`}>
                  <img src={item.image} alt={item.title}></img></Link>
                  <div className="itemInfor">
                  <Link to={`/${item.id}`}><h4>{item.title}</h4></Link>  
                    <p>{item.category}</p>
                    <p>Actual Price: $ {item.price} </p>
                    <div className="iteamdelete">
                      <div
                        onClick={() => handleDelete(item)}
                        className="deletebtndiv"
                      >
                        
                        <DeleteIcon className="deletebtn"></DeleteIcon>
                      </div>
                      <div className="favoritebtndiv">
                        <FavoriteIcon style={{color:colors[item.id]}}
                          onClick={(e) => addWishList(item, e)}
                          className="favoritebtn"
                        ></FavoriteIcon>
                      </div>
                    </div>
                  </div>
                  <div className="incredecri">
                    <button onClick={(e) => counterss(item)}>+</button>
                    <p className="quantity">{item.qun}</p>
                    <button onClick={(e) => deccounters(item)}>-</button>
                    
                  </div>
                  <div className="totalamt">
                    <p>Total:</p>
                    <p className="total">
                      {Math.floor(item.qun * item.price)}
                    </p>
                  </div>
                </div>
              </>
            ))
          ) : (
            <Link to="/">
              {" "}
              <div className="StartShopping">
                <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'></img>
                <h3>Your Cart is empty!</h3>
                <p>Shop now</p>
                </div>
            </Link>
          )}
        </div>
        <div className="paymentBox">
          <div className="paymentBoxinfo">
            <div className="totalInfo">
              <h3>Subtotal</h3> <h3> $: {subtotal} </h3>
            </div>
            <div className="totalInfo">
              <h3>Shipping</h3> <h3> $: {Shipping}</h3>
            </div>
            <div className="totalInfo">
              <h3>Total(Incl. taxes) </h3>
              <h3>$: {subtotal + Shipping}</h3>
            </div>
          </div>
          <div className="orderBtn">
            <button onClick={openfrom}>Place Order</button>
          </div>
        </div>
    
      </div>

          
    </div>
          
          </>
  );
};

export default Cart;
