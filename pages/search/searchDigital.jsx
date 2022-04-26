import React from "react";
import Layout from '../../components/Layout'
import styles from "../../styles/Search.module.scss";
import Card from "../../components/Products/Card";

const digitalGames = () => {
  return (
    <Layout
        title="Digital | DigitalCur"
        desc="DigitalCur"
        icon1="/icons/gamesphysical.svg"
        icon2="/icons/activedigital.svg"
        icon3="/icons/games.svg"
        icon4="/icons/gamesstreaming.svg"
        class1="item"
        class2="itemActive"
        class3="item"
        class4="item"
      >
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <p className={styles.filterBy}>FILTER BY</p>
            <a href="#">• Fight</a>
            <a href="#">• Action</a>
            <a href="#">• MetroidVania</a>
            <a href="#">• Shooter</a>
            <a href="#">• Survival</a>
            <a href="#">• Indie</a>
            <a href="#">• Long Story</a>
            <a href="#">• MMORPG</a>
            <a href="#">• RPG</a>
            <a href="#">• Multiplayer</a>
            <a href="#">• Multiplayer COOP</a>
            <a href="#">• Online</a>
          </div>
          <div className={styles.pricing}>
            <p className={styles.filterBy}>FILTER BY</p>
            <p>Price</p>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Minimum" className={styles.min} />
              <p>-</p>
              <input type="text" placeholder="Maximum" className={styles.max} />
            </div>
            <input className={styles.range} type="range" min="0" max="100" />
          </div>
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.productTitle}>
            <h2>Digital Games</h2>
            {/* <button>Popular First</button> */}
            {/* <button>Cheapest First</button> */}
            {/* <button>Discount First</button> */}
            {/* <button>Newest First</button> */}
            {/* <button className={styles.responsiveBtn}> <img src="/icons/uparrow.svg" alt="" /> </button> */}
          </div>
          <div className={styles.cardsContainer}>
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
          </div>
          <div className={styles.pagination}>
            <img
              src="/icons/bluetriangleleft.svg"
              alt=""
            />
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>5</a>
            <img
              src="/icons/bluetriangleright.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default digitalGames;
