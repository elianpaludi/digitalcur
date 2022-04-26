// import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Cart.module.scss";
import { useRouter } from "next/router";
import CartArticle from "../components/CartArticle";
const Cart = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <Layout
        title="My cart | DigitalCur"
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
        <div className={styles.leftTitle}>
          <h2>My shopping cart</h2>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.cardContainer}>
              <CartArticle
                img="/games/horizonzero.jpg"
                title="Horizon Zero Dawn"
                quant="1"
                price="$9.99"
              />
              <CartArticle
                img="/games/fc6.jpg"
                title="Far cry 6"
                quant="5"
                price="$9.99"
              />
              <CartArticle
                img="/games/wow.jpg"
                title="World of Warcraft"
                quant="1"
                price="$9.99"
              />
              <CartArticle
                img="/games/bsinfinite.jpg"
                title="Bioshock Infinite"
                quant="2"
                price="$9.99"
              />
              <CartArticle
                img="/games/fc6.jpg"
                title="Far cry 6"
                quant="5"
                price="$9.99"
              />
              <CartArticle
                img="/games/wow.jpg"
                title="World of Warcraft"
                quant="1"
                price="$9.99"
              />
            </div>
            <div className={styles.leftInfo}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                vel reprehenderit saepe culpa, praesentium dolorum voluptas
                eveniet rem. Eaque assumenda explicabo veniam asperiores eos
                adipisci tempore nam vero fuga facilis.
              </p>
            </div>
            <div className={styles.leftBtns}>
              <button type="button" onClick={handleClick}>
                Back to shopping
              </button>
              <p>
                Subtotal: <span>$00.00</span>
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.creditContainer}>
              <h2>CARD DETAILS</h2>
              <div className={styles.creditNumber}>
                <p>CARD NUMBER</p>
                <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
              </div>
              <div className={styles.cardExpiry}>
                <p>EXPIRY DATE</p>
                <div className={styles.expiryInput}>
                  <input type="text" placeholder="XX" />
                  <span>/</span>
                  <input type="text" placeholder="XX" />
                  <span>/</span>
                  <input type="text" placeholder="XXXX" />
                </div>
              </div>
              <div className={styles.cardCvv}>
                <p>CVV</p>
                <input type="text" placeholder="XXX" />
              </div>
              <div className={styles.crib}>
                <p>CRIB</p>
                <input type="text" placeholder="XXXX" />
              </div>
              <button>CHECKOUT</button>
            </div>
            <div className={styles.rightInfo}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque obcaecati sit omnis rem harum aperiam nostrum
                exercitationem repellat cumque! Tempore blanditiis eius,
                expedita minus vel voluptatibus excepturi totam rerum.
              </p>
              <div className={styles.visaMaster}>
                <img src="/icons/visa.svg" alt="" />
                <img src="/icons/mastercard.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
