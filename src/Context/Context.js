import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext(null);

export const ContextProvider = ({children})=>{

    const stroedItem = JSON.parse(localStorage.getItem("item"));
    const storeWishList = JSON.parse(localStorage.getItem("whishlist"));
    const storeColors = JSON.parse(localStorage.getItem("colors1"));
    const [cart, setCart] = useState(stroedItem || []);
    const [wishlist, setWishlist] = useState(storeWishList || []);
    const [colors, setColors] = useState(storeColors || []);
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
       
        window.addEventListener("resize",()=>{
          if( window.innerWidth >= 1000){
            setToggle(false);
      
    
           }
        })
       
 

      });
  
      useEffect(() => {
        localStorage.setItem("item", JSON.stringify(cart));
        localStorage.setItem("whishlist", JSON.stringify(wishlist));
        localStorage.setItem("colors1", JSON.stringify(colors));
      }, [cart, wishlist, colors, setColors]);
    
    
      
  return (
 


    <Context.Provider value={{cart,setCart,addToCart,wishlist,toggle,counterss,deccounters,colors,setToggle,openfrom,addWishList,setColors,removefromwishList,open,setOpen}}>
{children}
    </Context.Provider>
  )
}