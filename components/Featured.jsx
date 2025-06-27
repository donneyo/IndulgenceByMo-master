import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/feature5.png",
    "/img/feature7.png",
    "/img/feature6.png", // change if needed
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };

  // AUTO SLIDE every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="left arrow" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt={`slide ${i}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="right arrow" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
