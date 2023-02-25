
import React, { useState } from 'react'
import Styles from "./Login.module.css"
import axios from "axios"
import {Link} from "react-router-dom"
import { Button, Flex,Text, Input, Heading } from '@chakra-ui/react'
const LoginPage = () => {
  const [email,setemail]=useState("prashant")
  const [show,setshow]=useState(false)
  const [pass,setpass]=useState("")
  const [error,seterror]=useState("")
  async function login(){
    await axios.post(`http://localhost:8090/user/login`,{
     
      email:email,
      pass:pass
    }).then(res=>{
   localStorage.setItem("token",JSON.stringify(res.data.token))
    }).catch(err=>seterror(err.response.data))

  }
  
  return (
    <div>
      <Flex justify={"center"} ><Link to="/"><img src="/login.jpeg" width="200px" alt="/" /></Link></Flex>

<div className={Styles.login}>
  <Heading size={"md"} m="10px 0px">Sign in</Heading>
{show===true?<div >
<h4>{email} <Text cursor={"pointer"} onClick={()=>setshow(false)}>change?</Text></h4>
<label>Password <br/>
    <Input type="password" name="password"onChange={(e)=>setpass(e.target.value)} placeholder='Enter your password' id="password" /><br/>
    <button onClick={login}>Sign in</button></label>
</div>: <div >
    <label>Enter your email <br/>
    <Input type="email" name="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' /><br/>
    <button onClick={()=>setshow(true)}>Continue</button></label></div>}
 

{error?<h3>{error}</h3>:null}

  <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    <li>Forgot Password?</li>

</div>
<div className={Styles.belowlogin}>
<p>--------New to Amazon?--------</p>
<Button ><Link to="/signup">Create Your Amazon account</Link></Button>
</div>


    </div>
  )
}

export default LoginPage