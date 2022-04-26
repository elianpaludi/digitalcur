import React from "react";
import styles from "./Asidenav.module.scss";
import Image from "next/Image";
import Link from "next/Link";

const Asidenav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/icons/logo.svg" width={150} height={50} />
      </div>
      <div className={styles.catalogBtn}>
        <button>Go to catalog</button>
      </div>
      <div className={styles.section1}>
        <div className={styles.item}>
          <Image src="/icons/user.svg" width={25} height={25} />
          <a>Profile</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/search.svg" width={25} height={25} />
          <a>Search</a>
        </div>
      </div>
      <div className={styles.categoryTitle}>
        <h2>CATEGORY</h2>
        <Image src="/icons/uparrow.svg" width={25} height={25} />
      </div>
      <div className={styles.section2}>
        <div className={styles.item}>
          <Image src="/icons/physicalgames.svg" width={25} height={25} />
          <a>Physical Games</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/digitalgames.svg" width={25} height={25} />
          <a>Digital Games</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/games.svg" width={25} height={25} />
          <a>Games</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/streaming.svg" width={25} height={25} />
          <a>Streaming</a>
        </div>
      </div>
      <div className={styles.span}>
        <Image src="/icons/span.svg" width={175} height={2} />
      </div>
      <div className={styles.section3}>
        <div className={styles.item}>
          <Image src="/icons/help.svg" width={25} height={25} />
          <a>Help</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/info.svg" width={25} height={25} />
          <a>Conditions</a>
        </div>
        <div className={styles.item}>
          <Image src="/icons/contract.svg" width={25} height={25} />
          <a>Confidentiality</a>
        </div>
      </div>
    </nav>
  );
};

export default Asidenav;
