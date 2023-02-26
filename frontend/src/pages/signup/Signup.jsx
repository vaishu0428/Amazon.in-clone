import React, { useState } from "react";
import Styles from "../login/Login.module.css";
import axios from "axios";
import { Flex, Heading, Input } from "@chakra-ui/react";
import { Link,  useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  console.log(email, pass, name);
  const navigate = useNavigate()
  async function register() {
    if (name === "" || email === "" || pass === "") {
      alert("enter details");
    } else
      await axios
        .post(`https://smoggy-woolens-lamb.cyclic.app/user/register`, {
          name: name,
          email: email,
          pass: pass,
        })
        .then((res) => {
          // console.log(res);
          navigate("/login")



        })
        .catch((err) => seterror(err.response.data.error));
  }
  return (
    <div>
      <Flex justify={"center"}>
        <Link to="/">
          <img src="/login.jpeg" width="200px" alt="/" />
        </Link>
      </Flex>

      <div className={Styles.login}>
        <Heading size={"md"} m="10px 0px ">
          Create Account
        </Heading>
        <div>
          <label>
            Your name <br />
            <Input
              type="text"
              name="name"
              onChange={(e) => setname(e.target.value)}
              placeholder="First and last name"
              id="name"
            />
          </label>
        </div>
        <div>
          <label>
            Enter your email <br />
            <Input
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              id="email"
            />
            <br />
          </label>
        </div>
        <div>
          <label>
            Password <br />
            <Input
              type="password"
              name="password"
              onChange={(e) => setpass(e.target.value)}
              placeholder="At least 6 characters"
              id="password"
            />
            <br />
            <p>Passwords must be at least 6 characters.</p>
          </label>
        </div>

        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </p>
        <button onClick={register}>Continue</button>
        {error ? <h3>{error}</h3> : null}
      </div>
      <div className={Styles.belowlogin}>
        <p>Already have an account? Sign in</p>
        <p>
          By creating an account or logging in, you agree to Amazons Conditions
          of Use <br />
          and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Signup;
