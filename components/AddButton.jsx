import styles from "../styles/Add.module.css";
import { FiPlus } from "react-icons/fi";

const AddButton = ({ setClose }) => {
  return (
  <div onClick={() => setClose(false)} className={styles.mainAddButton}>
    <FiPlus style={{ marginRight: "8px" }} />
    Add New Bread
  </div>

  );
};

export default AddButton;
