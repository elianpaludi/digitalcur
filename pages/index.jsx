import Layout from "../components/Layout/Layout";
import styles from "./index.module.scss";
import Image from "next/image";
import Product from "../components/Products/Products";
import News from "../components/News/News";
export default function Home() {
  return (
    <body>
      <Layout title="Home | DigitalCur" desc="DigitalCur">
        <div className={styles.container}>
          <header className={styles.header}>
            {/* <Image src="/header.svg" width={1300} height={500} /> */}
            <img src="/header.svg" alt="" />
          </header>
          <Product title="All our products" />
          <News />
          <Product title="Physical Games" />
          <Product title="Digital Games" />
          <section className={styles.banner}>
            {/* <Image src="/banner.svg"  height="100%"/> */}
            <img src="/banner.svg" alt="" />
          </section>
          <Product title="All Games" />
        </div>
      </Layout>
    </body>
  );
}
