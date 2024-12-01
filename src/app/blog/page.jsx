import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function page() {
  return (
    <div>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default page