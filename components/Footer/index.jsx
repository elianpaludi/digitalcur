import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.container}>
        <Image src="/icons/logo.svg" width={150} height={50} alt=""/>       
        <div className={styles.copyright}>
          <p>Digital Cur - All rights reserved - 2022</p>
          <Image src="/icons/copyright.svg" width={18} height={18} alt=""/>
        </div>
        <a href="#">Contact us</a>
    </footer>
  )
}

export default Footer