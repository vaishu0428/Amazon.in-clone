import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../adminPages/Home";
import Login from "../adminPages/Login";
import SignIn from "../adminPages/SignIn";
import AdminUpdateProductPage from "../adminPages/AdminUpdateProductPage"
import AdminUsersPage from "../adminPages/AdminUsersPage"
import AdminProducts from "../adminPages/AdminProducts"
import AdminOrderPage from "../adminPages/AdminOrderPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/adminsignup" element={<SignIn />} />
      <Route path="/adminupdate" element={<AdminUpdateProductPage/>} />
      <Route path="/adminusers" element={<AdminUsersPage/>} />
      <Route path="/adminproducts" element={<AdminProducts/>} />
      <Route path="/adminorders" element={<AdminOrderPage/>} />

    </Routes>
  );
};

export default AllRoutes;
