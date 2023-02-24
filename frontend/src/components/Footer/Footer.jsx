import React from 'react'
import logo from "../Navbar/Logo.png"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
         <p>Back to top</p>
      </div>
      <div className={styles.footer2}>
        <div>
            <h4>Get to Know Us</h4>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Dukan Science</p>
        </div>
        <div>
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
        <div>
            <h4>Make Money with Us</h4>
            <p>Sell on Dukan.in</p>
            <p>Sell under Dukan Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Dukan Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Dukan</p>
            <p>Advertise Your Products</p>
            <p>Dukan Pay on Merchants</p>
        </div>
        <div>
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Dukan</p>
            <p>Your Account</p>
            <p>Returns Center</p>
            <p>100% Purchase Protection</p>
            <p>Help</p>
        </div>
       
      </div>
      <div className={styles.footer3}>
        <div>
            {/* <img src={logo} alt="" /> */}
            <button>English</button>
        </div>
        <div>
            <p>Australia</p>
            <p>Brazil</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
            <p>Poland</p>
            <p>Singapore</p>
            <p>Spain</p>
            <p>Turkey</p>
            <p>UAE</p>
            <p>UK</p>
            <p>US</p>
        </div>
      </div>
      <div className={styles.footer4}>
        <div>
        <div>
            <h4>AbeBooks</h4>
            <p>Books, art</p>
            <p>& collections</p>
        </div>
        <div>
            <h4>Audible</h4>
            <p>Download</p>
            <p>Audio Books</p>
        </div>
        <div>
            <h4>Shopbop</h4>
            <p>Designer</p>
            <p>Fashion Brands</p>
        </div>
        <div>
            <h4>DpReview</h4>
            <p>Digital</p>
            <p>Photography</p>
        </div>
        <div>
            <h4>Dukan Business</h4>
            <p>Everything For</p>
            <p>Your Business</p>
        </div>
        <div>
            <h4>Prime Now</h4>
            <p>2-Hour Delivery</p>
            <p>on Everyday Items</p>
        </div>
        </div>
        <div>
            <p>Conditions of Use & Sale   Privacy Notice   Interest-Based Ads</p>
            <p>1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
