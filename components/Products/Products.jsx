import React from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
const Products = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <h3>{title}</h3>
          <button className={styles.top}>Top</button>
          <button className={styles.popular}>Popular</button>
          <button className={styles.mostSold}>Most sold</button>
        </div>
        <div className={styles.categories}>
          <p>Categories</p>
          <Image src="/icons/downtriangle.svg" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Products;
