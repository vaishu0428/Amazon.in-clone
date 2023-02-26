import React from "react";
import styles from "./AdminUserCard.module.css";

const AdminUserCard = ({
  created,
  email,
  image,
  isActive,
  mobile,
  name,
  pass,
  role,
  _id,
}) => {
  return (
    <div className={styles.usercard}>
      <div className={styles.left}>
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>username : {name}</h3>
          <h3>userid : {_id}</h3>
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
          <p>status:{isActive ? "Active":"Unactive"}</p>
        </div>
        <div className={styles.btn}>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserCard;
