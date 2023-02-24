import React from 'react'
import styles from "./Navbar.module.css"
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import logo from "./Logo.png"
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.navbar1}>
      <div className={styles.logo}>
      <img src={logo} alt="logo" placeholder='Search Dukan.in' />
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder='Search Dukan.in' />
        <button><BiSearch/></button>
      </div>
      <div className={styles.auth}>
      <p><BsPerson/>login</p>
      <p><HiOutlineShoppingCart/>cart</p>
      </div>
      
    </div>
    <div className={styles.navbar2}>
      <p>All</p>
      <p>Men</p>
      <p>Women</p>
      <p>Footwear</p>
      <p>Kids</p>
  </div>
  </div>
  )
}

export default Navbar
