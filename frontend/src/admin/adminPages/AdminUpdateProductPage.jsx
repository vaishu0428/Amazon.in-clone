import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import { updateProduct } from "../fetchData/data";
import styles from "./AdminProductUpdatePage.module.css";
// 9
const AdminUpdateProductPage = () => {
  const { id } = useParams();

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handleUpdate = async () => {
    const payload = {
      brand,
      category,
      description,
      image,
      price,
      quantity,
      rating,
      title,
      type,
    };

    await updateProduct(id, payload).then((res) => console.log(res));
  };

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className={styles.title}>UPDATE PRODUCT DATA</div>
      <div className={styles.data}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          placeholder="price"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="description"
        />
        <input
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          type="text"
          placeholder="brand"
        />
        <input
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          type="text"
          placeholder="rating"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          placeholder="category"
        />
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          type="text"
          placeholder="type"
        />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type="text"
          placeholder="quantity"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          placeholder="image url"
        />
        <button onClick={handleUpdate} className={styles.btn}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default AdminUpdateProductPage;
