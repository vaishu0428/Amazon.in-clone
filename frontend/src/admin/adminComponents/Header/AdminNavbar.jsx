import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./adminNavbar.module.css";
// import { CgProfile } from "react-icons/cg";

const AdminNavbar = () => {
  return (
    <div className={styles.adminnavbar}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
        alt=""
      />
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/admin/login">Login</Link>
      </p>
      <p>
        <Link to="/admin/signup">Signup</Link>
      </p>
    </div>
  );
};

export default AdminNavbar;
