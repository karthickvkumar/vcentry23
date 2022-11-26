import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import SingleProductPage from "./pages/single-product";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";

import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/responsive.css";
import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="product" element={<SingleProductPage></SingleProductPage>}></Route>
        <Route path="cart" element={<CartPage></CartPage>}></Route>
        <Route path="checkout" element={<CheckoutPage></CheckoutPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;