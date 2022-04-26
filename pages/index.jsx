import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";
import Product from "../components/Products";

export default function home() {
  return (
    <body>
      <Layout
        title="Home | DigitalCur"
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
          <header className={styles.header}>
            <img src="/header.svg" alt="" />
          </header>
          <Product title="All our products" to="/search/" />
          {/* <News /> */}
          <Product title="Physical Games" to="/search/searchPhysical" />
          <Product title="Digital Games" to="/search/searchDigital" />
          <section className={styles.banner}>
            <img src="/banner.svg" alt="" />
          </section>
          <Product title="All Games" to="/search/" />
          <Product title="Streaming" to="/search/searchStreaming" />
        </div>
        {/* <Footer></Footer> */}
      </Layout>
    </body>
  );
}
