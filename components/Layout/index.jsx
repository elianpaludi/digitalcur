import Head from "next/head";
import React from "react";
import Asidenav from "../Asidenav";
import Upnavbar from "../Upnavbar";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children, title, desc, icon1, class1, icon2, class2, icon3, class3, icon4, class4}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <div className={styles.superMainContainer}>
        <div className={styles.asideContainer}>
          <Asidenav 
          icon1 = {icon1}
          icon2 = {icon2}
          icon3 = {icon3}
          icon4 = {icon4}
          class1 = {class1}
          class2 = {class2}
          class3 = {class3}
          class4 = {class4}
          />
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
  )
}

export default Layout;