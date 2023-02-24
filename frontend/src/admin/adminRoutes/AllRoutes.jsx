import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../adminPages/Home";
import Login from "../../adminPages/Login";
import SignIn from "../../adminPages/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default AllRoutes;
