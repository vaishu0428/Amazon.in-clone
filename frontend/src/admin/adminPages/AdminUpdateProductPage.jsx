import React from 'react'
import AdminNavbar from '../adminComponents/Header/AdminNavbar'
import styles from "./AdminProductUpdatePage.module.css"
// 9
const AdminUpdateProductPage = () => {
  return (
    <div>
        <div>
            <AdminNavbar/>
        </div>
        <div className={styles.title}>
            UPDATE PRODUCT DATA
        </div>
    <div className={styles.data}>
    
        <input type="text" placeholder='title'/>
        <input type="text" placeholder='price' />
      
      <input type="text" placeholder='description' />
      
        <input type="text" placeholder='brand' />
        <input type="text" placeholder='rating' />
      
        <input type="text" placeholder='category' />
        <input type="text" placeholder='type' />
     
     
            <input type="text" placeholder='quantity' />
       
     
        
      <input type="text" placeholder='image url' />
     
      <button className={styles.btn}>UPDATE</button>
 
    </div>
    </div>
  )
}

export default AdminUpdateProductPage
