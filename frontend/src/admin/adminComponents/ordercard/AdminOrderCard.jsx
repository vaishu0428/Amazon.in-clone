import React, { useEffect, useState } from "react";
import { updateOrderStatus } from "../../fetchData/data";
import styles from "./AdminOrderCard.module.css";

const AdminOrderCard = ({
  created,
  payment,
  products,
  status,
  totalAmount,
  user,
  _id,
}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (products) {
      setProduct(products);
      // console.log("products", products.length);
    }
  }, [products]);

  const handleOrderStatus = async (id) => {
    let status = window.prompt("Please enter Status");
    if (status != null) {
      // if (
      //   status === "deliverd" ||
      //   status === "packed" ||
      //   status === "dispatch"
      // ) {
      await updateOrderStatus(id, status).then((res) => console.log(res));
      // console.log(status);
      // } else {
      //   alert("You shold only packed,dispatch,deliverd");
      // }
    }
  };

  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
        <img
          src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>Order Date : {created} </h3>
          <p>userid:{user}</p>
          <h3>Order Staus: {status}</h3>
        </div>
        <div className={styles.id}>
          <p>Order id : </p>
          <p> {_id}</p>
        </div>
        <div className={styles.id}>
          <p>Paymet : </p>
          <p> {payment}</p>
        </div>
        <div className={styles.numbers}>
          <div>
            {/* <p></p> */}
            <p>Products: {product.length} </p>
          </div>
          <div>
            <p>{totalAmount}</p>
            <p>TOTAL AMOUNT</p>
          </div>
        </div>
        <div className={styles.btn}>
          {/* <button><Link className={styles.btn} to="/adminupdate">UPDATE</Link></button> */}
          <button onClick={() => handleOrderStatus(_id)}>
            Update Order Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderCard;
