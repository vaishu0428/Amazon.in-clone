import React, { useEffect, useState } from "react";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
// import AdminProductCard from '../adminComponents/productcard/AdminProductCard';
import AdminUserCard from "../adminComponents/usercard/AdminUserCard";
import { alluser } from "../fetchData/data";
import styles from "./AdminUsersPage.module.css";

const AdminUsersPage = () => {
  const [allUsers, setAllusers] = useState([]);
  useEffect(() => {
    alluser().then((res) => {
      setAllusers(res.data.allusers);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.maindiv}>
      <div className={styles.navbar}>
        <AdminNavbar />
      </div>
      <div className={styles.home}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.right}>
          {/* <div className={styles.card}>
            <Cardcomponent />
            <Cardcomponent />
            <Cardcomponent />
          </div> */}
          <div className={styles.searchbar}>
            <input type="text" placeholder="search users " />
            <button>search</button>
            <div>
              <p>TOTAL USERS : {allUsers.length}</p>
            </div>
          </div>
          <div className={styles.productcard}>
            {allUsers?.map((ele) => {
              return <AdminUserCard {...ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersPage;
