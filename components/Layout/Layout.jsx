import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss"
import Asidenav from '../Asidenav/Asidenav'
import Upnavbar from "../Upnavbar/Upnavbar";
const Layout = ({ children, title, desc }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <div className={styles.asideContainer}>
        <Asidenav />
      </div>
      <div className={styles.mainContainer}>
        {/* <Navbar /> */}
        <Upnavbar/>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
