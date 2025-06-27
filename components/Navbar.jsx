// import styles from "../styles/Navbar.module.css";
// import Image from "next/image";
// import { useSelector } from "react-redux";
// import Link from "next/link";
//
//
// const Navbar = () => {
//     const quantity = useSelector((state) => state.cart.quantity);
//     return (
//         <>
//             <div className={styles.container}>
//                 <div className={styles.item}>
//                     <div className={styles.callButton}>
//                         <Image src="/img/telephone.png" alt="" width="32" height="32" />
//
//                     </div>
//                    <div className={styles.texts}>
//                      <div className={styles.text}>ORDER NOW!</div>
//                      <div className={styles.text}>0901-1237-831</div>
//                    </div>
//
//
//                 </div>
//                 <div className={styles.item}>
//                   <ul className={styles.list}>
//                     <Link href="/" passHref>
//                          <li className={styles.listItem}>Homepage</li>
//                     </Link>
//                      <Link href="/admin" passHref>
//                              <li className={styles.listItem}>Products</li>
//                      </Link>
//
//                      <Image src="/img/indulgencebymoResized.jpg" alt="" width="160" height="69"/>
//                     <li className={styles.listItem}>Menu</li>
//
//                    <Link href="/admin" passHref>
//                      <li className={styles.listItem}>Orders</li>
//                     </Link>
//                     <li className={styles.listItem}>Contact</li>
//                   </ul>
//                 </div>
//                 <Link href="/cart" passHref>
//                 <div className={styles.item}>
//                     <div className={styles.cart}>
//                       <Image src="/img/cart.png" alt="" width="30" height="30"/>
//                       <div className={styles.counter}> {quantity} </div>
//                     </div>
//                 </div>
//                 </Link>
//             </div>
//         </>
//     );
// }
//
// export default Navbar;

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/telephone.png" alt="" width="32" height="32" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>0901-1237-831</div>
          </div>
        </div>

        <div className={styles.logoWrapper}>
          <Image src="/img/feature9.png" alt="" width="160" height="69" />
        </div>


        <div className={styles.hamburger} onClick={() => setSidebarOpen(true)}>
          <FiMenu size={28} />
        </div>

        <ul className={styles.list}>
          <Link href="/" passHref><li className={styles.listItem}>Homepage</li></Link>
          <Link href="/admin" passHref><li className={styles.listItem}>Products</li></Link>
          <li className={styles.listItem}>Menu</li>
          <Link href="/admin" passHref><li className={styles.listItem}>Orders</li></Link>
          <li className={styles.listItem}>Contact</li>
        </ul>

        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30" height="30" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Overlay and Sidebar */}
      <div className={`${styles.overlay} ${sidebarOpen ? styles.show : ""}`} onClick={closeSidebar} />

      <div className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
        <div className={styles.sidebarHeader}>
          <FiX size={24} onClick={closeSidebar} className={styles.closeIcon} />
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/" passHref><li onClick={closeSidebar}>Homepage</li></Link>
          <Link href="/admin" passHref><li onClick={closeSidebar}>Products</li></Link>
          <li onClick={closeSidebar}>Menu</li>
          <Link href="/admin" passHref><li onClick={closeSidebar}>Orders</li></Link>
          <li onClick={closeSidebar}>Contact</li>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
