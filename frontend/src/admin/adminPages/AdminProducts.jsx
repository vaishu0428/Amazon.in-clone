import React, { useEffect, useState } from "react";
// import Cardcomponent from "../adminComponents/card/Cardcomponent";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
import AdminProductCard from "../adminComponents/productcard/AdminProductCard";
import { allProducts, singleProduct } from "../fetchData/data";
import styles from "./adminProducts.module.css";

const AdminProducts = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    allProducts().then((res) => {
      setAllProducts(res.data.products);
      console.log(res.data.products);
    });
  }, []);

  const handleSearch = () => {
    singleProduct(query).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
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
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search products "
            />
            <button onClick={handleSearch}>search</button>
          </div>
          <div className={styles.productcard}>
            {allproducts?.map((ele, i) => {
              return <AdminProductCard key={i} {...ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
