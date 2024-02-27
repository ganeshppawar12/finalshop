import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Arrow1 from "./images/Arrow 1.png";
import Arrow2 from "./images/Arrow 2.png";
import group1 from "./images/Group 19.png";
import "../App.css";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from "@mui/icons-material/Favorite";
import './Product.css'
import CircularIndeterminate from "./progresser";
import { Link } from "react-router-dom";
import {Context} from '../Context/Context'

const url = "https://fakestoreapi.com/products";

 const ProductSec = () => {
  const [productiteam, setproductiteam] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [getproductiteam, setgetproductiteam] = useState([]);
  const [getAccessories, setGetAccessories] = useState([]);
  const [Apparels, setApparels] = useState([]);
  const [all, setAll] = useState([]);
  const [loaded, setloaded] = useState(false);
  
  const CartItems = useContext(Context);
  const {addToCart,colors = 'black',addWishList} = CartItems;




  useEffect(() => {
    const feachdata = async () => {
      setloaded(true); 

      const res = await fetch(url);
      res.json().then((json) => {
        setproductiteam(json);
        setgetproductiteam(json);
        setBestSeller(json);
        setGetAccessories(json);
        setApparels(json);
        setAll(json)

      });
      setloaded(false); 

   
    };

    feachdata();
  }, []);



  function forworde() {
    let box = document.querySelector(".storeiteam");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }

  function backword() {
    let box = document.querySelector(".storeiteam");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }

  function BesetSellerStock(value) {
    let filtervalue = bestSeller.filter((item) => {
      return item.rating.rate >= 4;
    });

    setproductiteam(() => filtervalue);
  }

  function Sell(value) {
    let filterSell = getproductiteam.filter((item) => {
      return item.price <= 50;
    });

    setproductiteam(() => filterSell);
  }

  function Accessories(value) {
    let filterAccessoris = getAccessories.filter((item) => {
      return item.category === "electronics";
    });
    setproductiteam(() => filterAccessoris);
  }
 
  function Apparel(value) {
    let filterApparel = Apparels.filter((item) => {
      return item.category !== "electronics";
    });
    setproductiteam(() => filterApparel);
  }
    
  function allitem(){
  
    setproductiteam(() => all);
  }



   
  return (
    <div className="productZone">
{loaded ? <CircularIndeterminate></CircularIndeterminate>:

      <div className="productlist">
        <div className="namebar">
          <h2 onClick={()=>allitem()}>New products</h2>
          <div >
            <StarIcon className="star2"></StarIcon>
          </div>
          <div className="productnavigation">
            <img onClick={forworde} src={Arrow2}   alt="<"></img>
            <img onClick={backword} src={Arrow1}   alt=">"></img>
          </div>
        </div>

        <div className="productpage">
          <div className="productOptionlist">
            <ul>
              <li onClick={() => Apparel()}>Apparel</li>
              <li onClick={() => Accessories(getAccessories)}> Accessories</li>
              <li onClick={() => BesetSellerStock()}> Best sellers</li>
              <li onClick={() => Sell()}> 50% off</li>
            </ul>
          </div>
          <div className="storeiteam">
            {productiteam.map((iteam,index) => (
              <div key={index} className="prodcard">
                <div className="shopcard">
                  <div className="heartIcon">
                    <FavoriteIcon
                      className="favicon"
                      style={{ color:colors[iteam.id] , fontSize: "20px" }}
                      onClick={(e) => addWishList(iteam, e)}
                    ></FavoriteIcon>
                  </div>
              <Link to={`${iteam.id}`}>

                  <div className="prodcardimg">
                    <img className="iteamimg" src={iteam.image} alt={iteam.title}></img>
                    <div className="linkimg">
                      <img style={{color:'violet'}} src={group1} alt="productLink"></img>
                    </div>
                   
                  </div>
              </Link>

             
                  <h1 className="prohead">{iteam.title}</h1>
                </div>
                <p className="price">${iteam.price}</p>
                <div className="shopbtnk">
                      <button onClick={() => addToCart(iteam)}>
                        Add to Cart
                      </button>
                    </div>
              </div>
            ))}
          </div>

          <div className="navigation">
            <img className="arrow2" src={Arrow2} alt="<" onClick={forworde} ></img>
            <img className="arrow1" onClick={backword} src={Arrow1} alt=">"></img>
          </div>
        </div>
      </div>
      }
    </div>
  );
            
};
export default ProductSec;