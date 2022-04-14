import React from "react";
import styles from "./Upnavbar.module.scss";
import Image from "next/Image";

const Upnavbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.input}>
        <div className={styles.inputContainer}>
          {/* <Image src="/icons/search.svg" width={25} height={25} /> */}
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.categoriesContainer}>
            <a>See Categories</a>
            <Image src="/icons/downtriangle.svg" width={15} height={15}/>
        </div>
      </div>
      <div className={styles.avatar}>
        {/* <p>Helena Johnson</p> */}
        {/* <Image className={styles.avatarIcon} src="/avatar.svg" width={60} height={60}/> */}
        <Image src="/icons/bell.svg" width={30} height={30}/>
        <Image src="/icons/bag.svg" width={30} height={30}/>
        
      </div>
    </nav>
  );
};

export default Upnavbar;
