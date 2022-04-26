import React from "react";
import Layout from '../../components/Layout'
import styles from "../../styles/ProductPage.module.scss";
const product = () => {
  return (
    <Layout
        title="Product | DigitalCur"
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
        <div className={styles.leftContainer}>
          <div className={styles.images}>
            <div className={styles.imageBig}>
              <img src="/games/horizonzero.jpg" alt="" />
            </div>
            <div className={styles.imageSmall}>
              <img src="/CoverProduct/image1.svg" alt="" />
              <img src="/CoverProduct/image2.svg" alt="" />
              <img src="/CoverProduct/image3.svg" alt="" />
              <img src="/CoverProduct/image4.svg" alt="" />
              <img src="/CoverProduct/image5.svg" alt="" />
            </div>
          </div>
          <div className={styles.titleDesc}>
            <div className={styles.title}>
              <h3>Horizon Zero Dawn</h3>
            </div>
            <div className={styles.desc}>
              <p className={styles.desc1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                aperiam voluptas quis doloremque recusandae ullam earum dolore
                eaque harum molestias! Obcaecati assumenda error suscipit iusto
                nisi laudantium autem, a officiis. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Nihil aperiam voluptas quis
                doloremque recusandae ullam earum dolore eaque harum molestias!
                Obcaecati assumenda error suscipit iusto nisi laudantium autem,
                a officiis. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Nihil aperiam voluptas quis doloremque recusandae ullam
                earum dolore eaque harum molestias! Obcaecati assumenda error
                suscipit iusto nisi laudantium autem, a officiis.
              </p>
              <p className={styles.desc2}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                nulla distinctio nisi voluptas, eius alias accusantium debitis
                blanditiis, suscipit dignissimos aliquam aperiam impedit quos
                ullam esse? Quo praesentium libero nihil. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Aut nulla distinctio nisi
                voluptas, eius alias accusantium debitis blanditiis, suscipit
                dignissimos aliquam aperiam impedit quos ullam esse? Quo
                praesentium libero nihil. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Aut nulla distinctio nisi
                voluptas, eius alias accusantium debitis blanditiis, suscipit
                dignissimos aliquam aperiam impedit quos ullam esse? Quo
                praesentium libero nihil.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.pricing}>
            <div className={styles.standard}>
              <p>Standard Price</p>
              <p>$15.99</p>
            </div>
            <div className={styles.membership}>
              <p>With Membership</p>
              <p>$9.99</p>
            </div>
            <div className={styles.options}>
              <div className={styles.option}>
                <img src="/icons/blueSafe.svg" alt="" />
                <p>Buy with guarantee</p>
              </div>
              <div className={styles.option}>
                <img src="/icons/blueShield.svg" alt="" />
                <p>Safely Purchase</p>
              </div>
            </div>
          </div>
          <div className={styles.addToCart}>
            <div className={styles.addToTitle}>
              <p>Select the amount</p>
            </div>
            <div className={styles.amount}>
              <button>-</button>
              <p> 0 </p>
              <button>+</button>
            </div>
            <button className={styles.addToButton}>Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default product;
