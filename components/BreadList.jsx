import BreadCard from "./BreadCard";
import AddButton from "./AddButton";
import styles from "../styles/BreadList.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BreadList = ({ breadList, setClose }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token === process.env.NEXT_PUBLIC_TOKEN) {
      setIsAdmin(true);
      console.log("TOKEN from cookie:", token);
      console.log("Expected TOKEN:", process.env.NEXT_PUBLIC_TOKEN);

    }

    // If redirected after login, show modal once
    const showAddModal = document.cookie
      .split("; ")
      .find((row) => row.startsWith("showAddModal="))
      ?.split("=")[1];

    if (showAddModal === "true") {
      setClose(false);
      document.cookie = "showAddModal=false; max-age=0";
    }
  }, []);

  // Handle click on the Add New Bread button
  const handleAddClick = () => {
    if (isAdmin) {
      setClose(false); // show modal
    } else {
      router.push("/admin/login"); // redirect to login
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.desc}>
          Discover the freshest, softest bread in town. Baked with love every day! 🍞
        </p>

        <button onClick={handleAddClick} className={styles.linkButton}>
          Add New Bread
        </button>
      </div>

      <div className={styles.wrapper}>
        {breadList?.length > 0 ? (
          breadList.map((cakebread) => (
            <BreadCard key={cakebread._id} cakebread={cakebread} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default BreadList;
