import Layout from "../components/Layout/Layout";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Product from "../components/Products/Products";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <body>
      <Layout title="Home | DigitalCur" desc="DigitalCur">
        <div className={styles.container}>
          <header className={styles.header}>
            <img src="/header.svg" alt="" />
          </header>
          <Product title="All our products" to="/Search/Index"/>
          {/* <News /> */}
          <Product title="Physical Games" to="/Search/PhysicalGames"/>
          <Product title="Digital Games" to="/Search/DigitalGames"/>
          <section className={styles.banner}>
            <img src="/banner.svg" alt="" />
          </section>
          <Product title="All Games" to="/Search/Index"/>
          <Product title="Streaming" to="/Search/Streaming"/>
        </div>
        {/* <Footer></Footer> */}
      </Layout>
    </body>
  );
}
