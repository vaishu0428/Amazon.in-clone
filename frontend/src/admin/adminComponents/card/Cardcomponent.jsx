import React from "react";
import styles from "./card.module.css";

const Cardcomponent = ({total,title}) => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h3>{total}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Cardcomponent;
