import React, { useState } from "react";
import "./login.css";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post("https://weary-pig-shoulder-pads.cyclic.app/user/login", {
    //     email,
    //     pass: password,
    //   })
    //   .then((res) => {  
    //     console.log("res", res.data.token)
    //     localStorage.setItem("token",res.data.token)
    //   })
    //   .catch((err) => console.log(err));
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
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
  );
};

export default Login;
