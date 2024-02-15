import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../App.css";
import star1 from "./images/Star 1.png";
import hambburger1 from "./images/hamburger menu.png";
import cross from "./images/cross.png";
import { Link } from "react-router-dom";
import { IconButton, colors } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Navbar.css";
import { Context } from "../Context/Context";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const url = "https://fakestoreapi.com/products/categories";
export const Navbar = () => {
  const dispatch = useDispatch();
  const CartItems = useContext(Context);
  const {cart,wishlist,toggle,setToggle} = CartItems;
  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  function handletoggelStatus() {
    if (document.body.clientWidth >= 1000) {
      setToggle(false);
    }
  }

  const Navbariteam = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "men's clothing", id: "p1" },
        { name: "women's clothing", id: "p2" },
        { name: "jewelery", id: "p3" },
        { name: "electronics", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  const [subcat, setsubcat] = useState([]);

  useEffect(() => {
    const feachdata = async () => {
      const res = await fetch(url);
      res.json().then((json) => {
        setsubcat(json);
      });
    };
    feachdata();
  }, [document.body.clientWidth]);

  useEffect(() => {
    handletoggelStatus();
  }, []);

  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <>
      <div className={"navbar" + (lightTheme ? "" : " navdark")}>
        <h1 className={"titel" + (lightTheme ? "" : " dark")}>ShopKart</h1>

        <div className={toggle ? "cart2" : "cart"}>
          <Link to="/whishlist">
            {" "}
            <div className={"whislist" + (lightTheme ? "" : " wishlist2")}>
              {/* Wishlist ({wishlist.length}) */}
              {wishlist?.length > 0 ? (
                <p className="wishpro">{wishlist.length}</p>
              ) : (
                ""
              )}
              <IconButton>
                <FavoriteBorderOutlinedIcon
                  style={{ color: "#ec729c" }}
                ></FavoriteBorderOutlinedIcon>
              </IconButton>
            </div>
          </Link>
          <Link to="/cart">
            <div className={"bag" + (lightTheme ? "" : " wishlist2")}>
              {cart?.length > 0 ? (
                <p className="cartnum">{cart.length}</p>
              ) : (
                ""
              )}

              {/* <p>Bag({cartitem.length})</p>  */}
              <IconButton>
                <AddShoppingCartIcon style={{ color: "#ec729c" }} />
              </IconButton>
            </div>
          </Link>
          <FormControlLabel
            className="toggel"
            onClick={() => {
              dispatch(toggleTheme());
            }}
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          />
        </div>
        {/* <img className="star1" src={star1}></img> */}
        <StarIcon className={"star1" + (lightTheme ? "" : " dark")}></StarIcon>
      </div>

      <div className="navoption">
        <ul
          className={
            toggle
              ? "navul2" + (lightTheme ? "" : " navul3")
              : "navul" + (lightTheme ? "" : " navul3")
          }
        >
          {Navbariteam.map((item, index) => (
            <>
              <li
                key={index}
                className={"navli" + (lightTheme ? "" : " navli2")}
              >
                {item.name}
                <ul className="category">
                  {item.child?.map((i) => { 
                    return (
                      <> 
                        <li>{i.name}</li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div
        className={"hamburger" + (lightTheme ? "" : " ham1")}
        onClick={handleToggle}
      >
        {toggle ? <img src={cross}></img> : <img src={hambburger1}></img>}
      </div>
    </>
  );
};
