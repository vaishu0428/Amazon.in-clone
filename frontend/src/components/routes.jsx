import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home as AdminHome } from "../admin/adminPages/Home";
import Cart from "../Pages/cart/Cart";
import Childs from "../Pages/Child";
import Home from "../Pages/Home";
import LoginPage from "../Pages/login/Login";
import Mens from "../Pages/Mens";
import Payment from "../Pages/payment/Payment";
import Signup from "../Pages/signup/Signup";
import SinglePage from "../Pages/SinglePage";
import Womens from "../Pages/Womens";

const Pageroutes = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // console.log(token)
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route
        path="/payment"
        element={token ? <Payment /> : <LoginPage />}
      ></Route>
      <Route path="/men" element={<Mens />}></Route>
      <Route path="/women" element={<Womens />} />
      <Route path="/kid" element={<Childs />} />
      <Route
        path="/Single/:id"
        element={token ? <SinglePage /> : <LoginPage />}
      />
      <Route path="/admin" element={<AdminHome />} />
    </Routes>
  );
};

export default Pageroutes;
