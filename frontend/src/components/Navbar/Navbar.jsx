import React from 'react'
import styles from "./Navbar.module.css"
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.navbar1}>
      <img src="" alt="" placeholder='Search Dukan.in' />
      <div>
        <input type="text" placeholder='Search Dukan.in' />
        <button><BiSearch/></button>
      </div>
      <p>login</p>
      <p>cart</p>
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
