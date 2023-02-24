import React from 'react'
import styles from "./card.module.css"

const Cardcomponent = () => {
  return (
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>3000</h3>
            <p>Total users</p>
        </div>
    </div>
  )
}

export default Cardcomponent
