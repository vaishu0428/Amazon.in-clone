import React from 'react'
import Cardcomponent from "../adminComponents/card/Cardcomponent";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
import AdminProductCard from '../adminComponents/productcard/AdminProductCard';
import styles from "./adminProducts.module.css"

const AdminProducts = () => {
  return (
    
    <div>
        <div className={styles.navbar}>
          <AdminNavbar/>
        </div>
        <div className={styles.home}>
           <div className={styles.header}>
              <Header/>
           </div>
           <div className={styles.right}>
              <div className={styles.card}>
                  <Cardcomponent/>
                  <Cardcomponent/>
                  <Cardcomponent/>
              </div>
              <div className={styles.searchbar}>
                <input type="text" placeholder='search products '/>
                <button>search</button>
              </div>
              <div className={styles.productcard}>
                  <AdminProductCard/>
                  <AdminProductCard/>
                  <AdminProductCard/>
                  <AdminProductCard/>
                  <AdminProductCard/>
              </div>
           </div>
      
        </div>
    </div>

  )
}

export default AdminProducts
