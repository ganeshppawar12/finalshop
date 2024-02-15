import { useParams } from "react-router-dom";
import "./Productitem.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SouthIcon from '@mui/icons-material/South';
import { useContext, useEffect, useState } from "react";
import CircularIndeterminate from "./progresser";
import { Context } from "../Context/Context";


const Product = () => {
  const { id } = useParams();

  const CartItems = useContext(Context);
  const {addToCart,} = CartItems;
  const [loaded, setloaded] = useState(false);


  const [productitem, setProductitem] = useState({});
  async function fetchdata() {
    setloaded(true); 
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProductitem(data);
    setloaded(false); 

  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
    <div className="productContainer">
{ loaded?       <CircularIndeterminate></CircularIndeterminate>:
      <div className="productinformationContainer">
        {
          <div className="productItem">
            <div className="productitemImg">
              <img src={productitem.image}></img>
              <div className="productsbtn">
                <button onClick={() => addToCart(productitem)} className="productcart"><AddShoppingCartIcon ></AddShoppingCartIcon>Add To Cart</button>
                <button className="productBuy"><SouthIcon ></SouthIcon> Buy Now</button>

              </div>
            </div>
            <div className="productsinformation">
                <h2>{productitem.title}</h2>
                <p>{productitem.category}</p>
               <p className="rating">{productitem.rate} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img> </p>
                <h1>$ {productitem.price}</h1>
                <p><b>Description :</b> {productitem.description}</p>
            </div>
          </div>
        }
      
      </div>
}
</div>
    </>
  );
};

export default Product;
