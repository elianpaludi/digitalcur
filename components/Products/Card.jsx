import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
const Card = ({image, name, type, price, subprice}) => {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image src={image} width={257} height={139}/>
        </div>
        <div className={styles.desc}>
            <p className={styles.title}>{name}</p>
            <p className={styles.subtitle}>{type}</p>
            <p className={styles.price1}>{price}</p>
            <p className={styles.price2}>{subprice}</p>
            <button className={styles.button}><Image src="/icons/plus.svg" width={25} height={25}/><p>ADD TO CART</p></button>
        </div>
    </div>
  )
}

export default Card