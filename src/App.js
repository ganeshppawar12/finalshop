import "./App.css";
import { Subfoot } from "./Components/Subfoot";
import { Routes, Route, HashRouter } from "react-router-dom";
import Cart from "./Components/Cart";
import AllMainPage from "./Components/AllMainPage";
import React, { useEffect, useState } from "react";
// import WishList from "./Components/WishList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Product from "./Components/Product";
import CircularIndeterminate from "./Components/progresser";

import AllmainFrom from "./Components/AllmainFrom";

const Carts = React.lazy(()=> import("./Components/Cart"));
const Whislists = React.lazy(()=> import("./Components/WishList"));


function App() {
  const stroedItem = JSON.parse(localStorage.getItem("item"));
  const storeWishList = JSON.parse(localStorage.getItem("whishlist"));
  const storeColors = JSON.parse(localStorage.getItem("colors1"));
  const [cart, setCart] = useState(stroedItem || []);
  const [wishlist, setWishlist] = useState(storeWishList || []);
  const [colors, setColors] = useState(storeColors || []);
  const lightTheme = useSelector((state) => state.themeKey);
  const [loaded, setloaded] = useState(false);
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false);

  function addToCart(item, e) {
    setloaded(true);
    if (cart && cart.indexOf(item) !== -1) return;
    item.qun = 1
    setCart([...cart, item]);
    toast.success("Item Added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setloaded(false);
  }
  
  function counterss(id, d, e) {
    let carts = cart.map((item, index) => {
      if (item.id === id.id) {
      
        item.qun += 1;

        setCart([...cart]) 

      }
    });

    return { carts };
  }

  function deccounters(id) {
    let carts = cart.map((item, index) => {
      if (item.id === id.id && item.qun != 0) {
        if (item.qun === 0) return 1;
   
        item.qun-=1;
        setCart([...cart]) 
  }
    });

 

    return carts;
  }
  function removefromwishList(item) {
    if (colors[item.id] === "red") {

      colors[item.id] = "black";
      let fliterWishList = wishlist.filter((value) => {
        return value.id !== item.id;
      });
      setWishlist(fliterWishList);
      setColors([...colors]);
    }
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
  function addWishList(item, e) {
    if (colors[item.id] === "red") {
      colors[item.id] ='black';
      
      localStorage.setItem("colors1", JSON.stringify(colors));
      let fliterWishList = wishlist.filter((value) => {
        return value.id !== item.id;
      });

      setWishlist(fliterWishList);
      setColors([...colors]);
    } else {
      colors[item.id] = "red";
      if (wishlist.indexOf(item) !== -1) return;

      // colors[item.id] = "red";
      localStorage.setItem("colors1", JSON.stringify(colors));
      setWishlist([...wishlist, item]);
      setColors([...colors]);

      toast.success("Item Added to WishList", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }


  function openfrom(){
    setOpen(!open)
    
  }
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cart));
    localStorage.setItem("whishlist", JSON.stringify(wishlist));
    localStorage.setItem("colors1", JSON.stringify(colors));
  }, [cart, wishlist, colors, setColors]);


  

  return (
    <div className={ (toggle ? "Appi" : "App")+ (lightTheme ? "" : " dark3")}>
     <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AllMainPage
              addWishList={addWishList}
              cartitem={cart}
              addToCart={addToCart}
              wishlist={wishlist}
              colors={colors}
              toggle={toggle}
              setToggle={setToggle}
            ></AllMainPage>
          }
          
        ></Route>

        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div> <CircularIndeterminate></CircularIndeterminate> </div>}>
            <Carts
              cartitem={cart}
              setCart={setCart}
              addWishList={addWishList}
              counterss={counterss}
              deccounters={deccounters}
              colors={colors}
              openfrom={openfrom}
              open={open}
           
            ></Carts>
            </React.Suspense>
          }
        ></Route>

        <Route
        path="/:id"
        element={<Product 
          addToCart={addToCart}
        ></Product>}
        ></Route>

        <Route
        
          path="/whishlist"
          element={
            <React.Suspense fallback={<div> <CircularIndeterminate></CircularIndeterminate> </div>}>
            <Whislists
              wishlist={wishlist}
              removefromwishList={removefromwishList}
            ></Whislists>
            </React.Suspense>
          }
        ></Route>

      
      </Routes>
      </HashRouter>
      <ToastContainer ></ToastContainer>
      {/* <From1></From1> */}
      {/* <From2></From2> */}
      {/* <From3></From3> */}
              
      <AllmainFrom 
      cart={cart} 
      open={open} 
      setOpen={setOpen} 
      counterss={counterss} 
      deccounters={deccounters} 
      setCart={setCart}
      ></AllmainFrom>
 

      <Subfoot></Subfoot>

    </div>
  );
}

export default App;
