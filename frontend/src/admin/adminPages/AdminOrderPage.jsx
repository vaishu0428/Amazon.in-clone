import React from 'react'
import Cardcomponent from '../adminComponents/card/Cardcomponent';
import AdminNavbar from '../adminComponents/Header/AdminNavbar';
import Header from '../adminComponents/Header/Header';
import AdminOrderCard from '../adminComponents/ordercard/AdminOrderCard';
import styles from "./AdminUsersPage.module.css";

const AdminOrderPage = () => {
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
            <input type="text" placeholder='search orders '/>
            <button>search</button>
          </div>
          <div className={styles.productcard}>
              <AdminOrderCard/>
              <AdminOrderCard/>
              <AdminOrderCard/>
              <AdminOrderCard/>
              <AdminOrderCard/>
              <AdminOrderCard/>
             
          </div>
       </div>
  
    </div>
</div>
  )
}

export default AdminOrderPage
