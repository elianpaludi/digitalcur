import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { useRouter } from "next/router";

const Card = ({image, name, type, price, subprice}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/search/productPage");
  };
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image src={image} width={257} height={139} alt=""/>
        </div>
        <div className={styles.desc}>
            <p className={styles.title}>{name}</p>
            <p className={styles.subtitle}>{type}</p>
            <p className={styles.price1}>{price}</p>
            <p className={styles.price2}>{subprice}</p>
            <button onClick={handleClick} className={styles.button}><Image src="/icons/plus.svg" width={25} height={25} alt=""/><p>ADD TO CART</p></button>
        </div>
    </div>
  )
}

export default Card