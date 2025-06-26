import BreadCard from "./BreadCard";
import AddButton from "./AddButton";
import styles from "../styles/BreadList.module.css";

const BreadList = ({ breadList, setClose }) => {
  return (
    <div className={styles.container}>
      {/* Header Row */}
      <div className={styles.header}>
          <p className={styles.desc}>
                Discover the freshest, softest bread in town. Baked with love every day! 🍞
              </p>
        <AddButton setClose={setClose} />

      </div>



      <div className={styles.wrapper}>
        {breadList && Array.isArray(breadList) && breadList.length > 0 ? (
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
