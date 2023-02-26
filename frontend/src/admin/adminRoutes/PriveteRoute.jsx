import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../adminPages/Login";

const PriveteRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    navigate("/admin/login");
  }

  return <Login />;
};

export default PriveteRoute;
