import Head from "next/head";
import React from "react";
import Asidenav from "../Asidenav";
import Upnavbar from "../Upnavbar";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children, title, desc }){
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <div className={styles.superMainContainer}>
        <div className={styles.asideContainer}>
          <Asidenav />
        </div>
        <div className={styles.mainContainer}>
          <Upnavbar />
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </div>
          {/* <Footer></Footer> */}
    </div>
  );
};

