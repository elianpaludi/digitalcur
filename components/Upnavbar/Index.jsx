import React from "react";
import styles from "./Upnavbar.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const Upnavbar = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/myCart");
  };
  return (
    <nav className={styles.container}>
      <div className={styles.standardNav}>
        <img className={styles.responsiveLogo} src="/icons/logo.svg" alt="" />
        <div className={styles.input}>
          <div className={styles.inputContainer}>
            {/* <Image src="/icons/search.svg" width={25} height={25} /> */}
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.categoriesContainer}>
            <a>See Categories</a>
            <Image src="/icons/downtriangle.svg" width={15} height={15} alt="" />
          </div>
        </div>
        <div className={styles.avatar}>
          {/* <p>Helena Johnson</p> */}
          {/* <Image className={styles.avatarIcon} src="/avatar.svg" width={60} height={60}/> */}
          <button><Image src="/icons/bell.svg" width={30} height={30} alt=""/></button>
          <button type="button" onClick={handleClick}><Image src="/icons/bag.svg" width={30} height={30} alt=""/></button>
        </div>
      </div>
      
    </nav>
  );
};

export default Upnavbar;
