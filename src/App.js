import "./App.css";
import { Subfoot } from "./Components/Subfoot";
import { Routes, Route, HashRouter } from "react-router-dom";
import AllMainPage from "./Components/AllMainPage";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Product from "./Components/Product";
import CircularIndeterminate from "./Components/progresser";
import AllmainFrom from "./Components/AllmainFrom";
import { Context } from "./Context/Context";

const Carts = React.lazy(() => import("./Components/Cart"));
const Whislists = React.lazy(() => import("./Components/WishList"));

function App() {
  const lightTheme = useSelector((state) => state.themeKey);

  const CartItems = useContext(Context);
  const { toggle } = CartItems;

  return (
    <div className={(toggle ? "Appi" : "App") + (lightTheme ? "" : " dark3")}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AllMainPage></AllMainPage>}></Route>

          <Route
            path="/cart"
            element={
              <React.Suspense
                fallback={
                  <div>
                    {" "}
                    <CircularIndeterminate></CircularIndeterminate>{" "}
                  </div>
                }
              >
                <Carts></Carts>
              </React.Suspense>
            }
          ></Route>

          <Route path="/:id" element={<Product></Product>}></Route>

          <Route
            path="/whishlist"
            element={
              <React.Suspense
                fallback={
                  <div>
                    {" "}
                    <CircularIndeterminate></CircularIndeterminate>{" "}
                  </div>
                }
              >
                <Whislists></Whislists>
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </HashRouter>
      <ToastContainer></ToastContainer>

      <AllmainFrom></AllmainFrom>

      <Subfoot></Subfoot>
    </div>
  );
}

export default App;
