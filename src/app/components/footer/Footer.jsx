import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>@2024 Rushi Blogs. All rights reserved</div>
      <div className={styles.image}>
        <Image src="/1.png" alt="one" className={styles.icon} width={15} height={15}/>
        <Image src="/2.png" alt="two" className={styles.icon} width={15} height={15}/>
        <Image src="/3.png" alt="three" className={styles.icon} width={15} height={15}/>
        <Image src="/4.png" alt="four" className={styles.icon} width={15} height={15}/>
      </div>
    </div>
  )
}
