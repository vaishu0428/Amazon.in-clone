
import React  from "react";
import { Link } from "react-router-dom";
import { allProducts, deleteProduct } from "../../fetchData/data";
import styles from "./AdminProductCard.module.css";
const AdminProductCard = ({
  brand,
  category,
  description,
  image,
  price,
  quantity,
  rating,
  title,
  type,
  _id,
}) => {
  const handleDelete = (id) => {
    deleteProduct(id)
      .then((res) => {
        allProducts();
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   handleDelete();
  // }, [handleDelete]);

  // console.log(_id);

  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.id}>
          <p>product id : </p>
          <p> {_id}</p>
        </div>
        <div className={styles.numbers}>
          <p>category : {category}</p>
          <div>
            <p>{quantity}</p>
            <p>quantity remaining</p>
          </div>
        </div>
        <div className={styles.btn}>
          <button>
            <Link className={styles.btn} to={`/admin/update/${_id}`}>
              UPDATE
            </Link>
          </button>
          <button onClick={() => handleDelete(_id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
