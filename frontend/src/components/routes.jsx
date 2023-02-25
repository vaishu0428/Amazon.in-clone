import React from 'react'
import {Route,Routes} from "react-router-dom"
import Cart from '../Pages/cart/Cart'
import Home from "../Pages/Home"
import LoginPage from '../Pages/login/Login'
import Mens from '../Pages/Mens'
import Payment from '../Pages/payment/Payment'
import Signup from '../Pages/signup/Signup'

const Pageroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/men" element={<Mens/>}></Route>
            
        </Routes>

   
  )
}

export default Pageroutes