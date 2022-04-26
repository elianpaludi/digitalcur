import React from "react";
import styles from "./index.module.scss";
const Index = ({img, title, quant, price}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.number}>
        <p>{quant}</p>
      </div>
      <div className={styles.price}>
        <p>
          Total price: <span>{price}</span>
        </p>
      </div>
      <div className={styles.delete}>
          <button><img src="/icons/cross.svg" alt="" /></button>
      </div>
    </div>
  );
};

export default Index;
