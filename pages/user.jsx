import React from "react";
import Layout from "../components/Layout";
import ProductRecord from "../components/ProductRecord";
import styles from "../styles/UserProfile.module.scss";
const user = () => {
  return (
    <Layout
        title="My Profile | DigitalCur"
        desc="DigitalCur"
        icon1="/icons/gamesphysical.svg"
        icon2="/icons/gamesdigital.svg"
        icon3="/icons/games.svg"
        icon4="/icons/gamesstreaming.svg"
        class1="item"
        class2="item"
        class3="item"
        class4="item"
      >
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.upContainer}>
            <img className={styles.background} src="/userProfile.svg" alt="" />
            <div className={styles.avatar}>
              <img src="/helena.svg" alt="" />
            </div>
          </div>
          <div className={styles.downContainer}>
            <div className={styles.infoStatsContainer}>
              <div className={styles.info}>
                <h2>Helena Johnson</h2>
                <p>Account made in february 27</p>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat1}>
                  <p className={styles.totalNumber}>25</p>
                  <p className={styles.totalTitle}> BUYS</p>
                </div>
                <div className={styles.stat2}>
                  <p className={styles.totalNumber}>25</p>
                  <p className={styles.totalTitle}>OPINIONS</p>
                </div>
                <div className={styles.stat3}>
                  <p className={styles.totalNumber}>25</p>
                  <p className={styles.totalTitle}>GAMES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.historyContainer}>
          <ProductRecord
          img="/games/bsinfinite.jpg"
          title="Bioshock Infinite"
          date="14/02/2020"
          paymentImg="/icons/blueShield.svg"
          paymentTxt="Payment confirmed"
          purchaseImg="/icons/blueAlert.svg"
          purchaseTxt="Purchase pending.."
          />
          <ProductRecord
          img="/games/fc6.jpg"
          title="Far cry 6"
          date="15/04/2021"
          paymentImg="/icons/blueShield.svg"
          paymentTxt="Payment confirmed"
          purchaseImg="/icons/blueShield.svg"
          purchaseTxt="Purchase confirmed"
          />
          <ProductRecord
          img="/games/wow.jpg"
          title="World of Warcraft"
          date="01/01/2022"
          paymentImg="/icons/blueAlert.svg"
          paymentTxt="Purchase cancelled"
          purchaseImg="/icons/blueAlert.svg"
          purchaseTxt="Purchase cancelled"
          />
          <ProductRecord
          img="/games/horizonzero.jpg"
          title="Horizon Zero"
          date="15/06/2021"
          paymentImg="/icons/blueShield.svg"
          paymentTxt="Payment confirmed"
          purchaseImg="/icons/blueAlert.svg"
          purchaseTxt="Purchase pending.."
          />
        </div>
      </div>
    </Layout>
  );
};

export default user;
