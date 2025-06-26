import Image from "next/image";
import styles from "../styles/BreadCard.module.css";
import Link from "next/link";

const BreadCard = ({ cakebread }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${cakebread._id}`} passHref>
        <div className={styles.imgWrapper}>
          <Image src={cakebread.img} alt="" width="250" height="250" />
          <span className={styles.badge}>NEW</span> {/* You can also make this dynamic */}
          {cakebread.isNew && <span className={styles.badge}>NEW</span>}
          {cakebread.discount && <span className={styles.badge}>{cakebread.discount}% OFF</span>}

        </div>
      </Link>
      <h1 className={styles.title}>{cakebread.title}</h1>
      <span className={styles.price}>₦{cakebread.prices[0]}</span>
      <p className={styles.desc}>{cakebread.desc}</p>
    </div>
  );
};

export default BreadCard;
