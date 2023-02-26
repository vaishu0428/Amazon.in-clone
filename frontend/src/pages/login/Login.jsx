import React, { useState } from "react";
import Styles from "./Login.module.css";
import axios from "axios";
import { json, Link,  useNavigate } from "react-router-dom";
import { Button, Flex, Text, Input, Heading } from "@chakra-ui/react";
import ForgetPass from "./Forget";
const LoginPage = () => {
  const [email, setemail] = useState("prashant");
  const [show, setshow] = useState(false);
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate()
  async function login() {
    await axios
      .post(`https://smoggy-woolens-lamb.cyclic.app/user/login`, {
        email: email,
        pass: pass,
      })
      .then((res) => {
       localStorage.setItem("name",JSON.stringify(res.data.name))
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/")
      })
      .catch((err) => seterror(err.response.data));
  }

  return (
    <div>
      <Flex justify={"center"}>
        <Link to="/">
          <img src="/login.jpeg" width="200px" alt="/" />
        </Link>
      </Flex>

      <div className={Styles.login}>
        <Heading size={"md"} m="10px 0px">
          Sign in
        </Heading>
        {show === true ? (
          <div>
            <h4>
              {email}{" "}
              <Text cursor={"pointer"} onClick={() => setshow(false)}>
                change?
              </Text>
            </h4>
            <label>
              Password <br />
              <Input
                type="password"
                name="password"
                onChange={(e) => setpass(e.target.value)}
                placeholder="Enter your password"
                id="password"
              />
              <br />
              <button onClick={login}>Sign in</button>
            </label>
          </div>
        ) : (
          <div>
            <label>
              Enter your email <br />
              <Input
                type="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
              />
              <br />
              <button onClick={() => setshow(true)}>Continue</button>
            </label>
          </div>
        )}

        {error ? <h3>{error}</h3> : null}

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <li><ForgetPass /></li>
      </div>
      <div className={Styles.belowlogin}>
        <p>--------New to Amazon?--------</p>
        <Button>
          <Link to="/signup">Create Your Amazon account</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
