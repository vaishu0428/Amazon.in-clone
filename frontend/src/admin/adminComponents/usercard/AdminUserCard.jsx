import React from 'react'
import styles from "./AdminUserCard.module.css"

const AdminUserCard = () => {
  return (
    <div className={styles.usercard}>
      <div className={styles.left}>
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_525,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png" alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>username : Asif Shaikh</h3>
        <h3>userid :  124578963254789</h3>
      </div>
      <div className={styles.numbers}>
        <div>
            <p>12</p>
            <p>orders</p>
        </div>
        <div>
            <p>4</p>
            <p>cart items</p>
        </div>
      </div>
      <div className={styles.status}>
         <p>status:active</p>
      </div>
      <div className={styles.btn}>
         <button>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminUserCard
