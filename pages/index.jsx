import Layout from "../components/Layout/Layout";
import styles from "./index.module.scss";
import Image from "next/image";
import Product from "../components/Products/Products";
export default function Home() {
  return (
    <Layout title="Home | DigitalCur" desc="DigitalCur">
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src="/header.svg" width={1300} height={500} />
        </header>
        <Product title="All our products"/>
        <Product title="Physical Games"/>
        <Product title="Digital Games"/>
        <Product title="All Games"/>
      </div>
    </Layout>
  );
}
