import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigat = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://smoggy-woolens-lamb.cyclic.app/user/login", {
        email,
        pass: password,
      })
      .then((res) => {
        console.log("res", res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        return navigat("/");
      })
      .catch((err) => console.log(err));
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="login-form-container">
        <h2 className=" h2">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-floating ${email ? "has-value" : ""}`}>
            <input
              type="email"
              id="email"
              value={email}
              required={true}
              onChange={handleEmailChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={`form-floating ${password ? "has-value" : ""}`}>
            <input
              type="password"
              id="password"
              minLength={"4"}
              value={password}
              required={true}
              onChange={handlePasswordChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <input type={"submit"} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
