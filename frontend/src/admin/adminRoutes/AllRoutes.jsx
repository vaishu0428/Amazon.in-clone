import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../adminPages/Home";
import Login from "../adminPages/Login";
import SignIn from "../adminPages/SignIn";
import AdminUpdateProductPage from "../adminPages/AdminUpdateProductPage";
import AdminUsersPage from "../adminPages/AdminUsersPage";
import AdminProducts from "../adminPages/AdminProducts";
import AdminOrderPage from "../adminPages/AdminOrderPage";
import PriveteRoute from "./PriveteRoute";

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PriveteRoute>
            <Home />
          </PriveteRoute>
        }
      />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/signup" element={<SignIn />} />
      <Route path="/admin/update/:id" element={<AdminUpdateProductPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/orders" element={<AdminOrderPage />} />
    </Routes>
  );
};

export default AllRoutes;
