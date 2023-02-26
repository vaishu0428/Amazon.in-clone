import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import { useNavigate } from "react-router-dom";
// import styles from "./login.module.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userDetail = {
      name,
      email,
      pass: password,
    };
    console.log("userDetail", userDetail);
    axios
      .post("https://smoggy-woolens-lamb.cyclic.app/user/register", userDetail)
      .then((res) => {
        console.log("res", res);
        return navigate("/admin/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="login-form-container">
        <h2 className="h2">SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-floating ${name ? "has-value" : ""}`}>
            <input
              type="text"
              id="name"
              value={name}
              required={true}
              onChange={handleNameChange}
            />
            <label htmlFor="email">Name</label>
          </div>
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

export default SignIn;

/** */
