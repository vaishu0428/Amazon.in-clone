import React from 'react'
import Styles from "../login/Login.module.css"
const Signup = () => {
  return (
   
         <div>
      <h1><img src="/login.jpeg" width="200px" alt="/" /></h1>

<div className={Styles.login}>
  <h2>Create Account</h2>
 <div >
    <label>Your name <br/>
    <input type="text" name="name" placeholder='First and last name' id="name" />
   </label>
   </div>
   <div >
    <label>Enter your email <br/>
    <input type="email" name="email" placeholder='Enter your email' id="email" /><br/>
 </label></div>
    <div >

<label>Password <br/>
    <input type="password" name="password" placeholder='At least 6 characters' id="password" /><br/>
    <p>
Passwords must be at least 6 characters.</p>
    </label>
</div>


  <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
   <button>Continue</button>

</div>
<div className={Styles.belowlogin}>
<p>
Already have an account? Sign in</p>
<p>By creating an account or logging in, you agree to Amazons Conditions of Use <br/>and Privacy Policy.</p>
</div>




    </div>
  )
}

export default Signup