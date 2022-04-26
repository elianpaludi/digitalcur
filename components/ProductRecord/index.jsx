import React from "react";
import styles from "./ProductRecord.module.scss";
const ProductRecord = ({img, title, date, paymentImg, paymentTxt, purchaseImg, purchaseTxt}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt="" width="100%" />
      </div>
      <div className={styles.titleDate}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.paymentPurchase}>
        <div className={styles.payment}>
          <img src={paymentImg} alt="" />
          <p>{paymentTxt}</p>
        </div>
        <div className={styles.purchase}>
          <img src={purchaseImg} alt="" />
          <p>{purchaseTxt}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductRecord;
