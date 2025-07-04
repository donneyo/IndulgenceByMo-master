import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../../styles/Product.module.css"; // Adjust to your stylesheet path
import baseUrl from "../../../util/baseUrl"; // ✅ Added

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`${baseUrl}/api/products/${id}`); // ✅ Updated
          setProduct(res.data);
          setTitle(res.data.title);
          setPrice(res.data.prices[0]);
          setImg(res.data.img);
        } catch (err) {
          console.error("Error fetching product:", err);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/api/products/${id}`, { // ✅ Updated
        title,
        prices: [price],
        img,
      });
      router.push("/admin");
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
