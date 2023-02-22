
import React, { useState } from 'react'
import Styles from "./Login.module.css"

const LoginPage = () => {
  const [email,setemail]=useState("prashant")
  const [show,setshow]=useState(false)
  const [pass,setpass]=useState("")
  
  return (
    <div>
      <h1><img src="/login.jpeg" width="200px" alt="/" /></h1>

<div className={Styles.login}>
  <h2>Sign in</h2>
{show===true?<div >
<h4>{email} <a href='/' onClick={()=>setshow(false)}>change?</a></h4>
<label>Password <br/>
    <input type="password" name="email" placeholder='Enter your password' id="password" /><br/>
    <button>Sign in</button></label>
</div>: <div >
    <label>Enter your email <br/>
    <input type="email" name="email" placeholder='Enter your email' id="email" /><br/>
    <button onClick={()=>setshow(true)}>Continue</button></label></div>}
 



  <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    <li>Forgot Password?</li>

</div>
<div className={Styles.belowlogin}>
<p>--------New to Amazon?--------</p>
<button>Create Your Amazon account</button>
</div>


    </div>
  )
}

export default LoginPage