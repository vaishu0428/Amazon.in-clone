import React from 'react'
import styles from "./AdminProductCard.module.css"
const AdminProductCard = () => {
  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_525,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png" alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>Nike Air Force 1 '07</h3>
      </div>
      <div className={styles.id}>
          <p>product id : </p>
         <p> 124578963254789</p>
      </div>
      <div className={styles.numbers}>
        <p>category : Mens Shoes</p>
        <div>
            <p>315</p>
            <p>quantity remaining</p>
        </div>
      </div>
      <div className={styles.btn}>
         <button>UPDATE</button>
         <button>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminProductCard
