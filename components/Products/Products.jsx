import React from "react";
import styles from "./Products.module.scss";
import Card from "./Card"
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
      <div className={styles.cards}>
        <Card
        image="/games/horizonzero.jpg" 
        name="Horizon Zero Dawn"
        type="Digital Game"
        price="$9.99"
        subprice="$15.99"
        />
        <Card
        image="/games/fc6.jpg" 
        name="Far cry 6"
        type="Digital Game"
        price="$19.99"
        subprice="$29.99"
        />
        <Card
        image="/games/bsinfinite.jpg" 
        name="Bioshock Infinite"
        type="Digital game"
        price="$3.99"
        subprice="$9.99"
        />
        <Card
        image="/games/wow.jpg" 
        name="World of Warcraft"
        type="Digital Game"
        price="$29.99"
        subprice="$49.99"
        />
      </div>
    </div>
  );
};

export default Products;
