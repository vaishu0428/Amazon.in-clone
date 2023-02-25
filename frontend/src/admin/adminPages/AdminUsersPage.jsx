import React from 'react'
import Cardcomponent from "../adminComponents/card/Cardcomponent";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
// import AdminProductCard from '../adminComponents/productcard/AdminProductCard';
import AdminUserCard from '../adminComponents/usercard/AdminUserCard';
import styles from "./AdminUsersPage.module.css";

const AdminUsersPage = () => {
  return (
    <div className={styles.maindiv}>
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
                <input type="text" placeholder='search users '/>
                <button>search</button>
                <div>
                  <p>TOTAL USERS : 3000</p>
                </div>
              </div>
              <div className={styles.productcard}>
                  <AdminUserCard/>
                  <AdminUserCard/>
                  <AdminUserCard/>
                  <AdminUserCard/>
                  <AdminUserCard/>
                  
              </div>
           </div>
      
        </div>
    </div>
  )
}

export default AdminUsersPage
