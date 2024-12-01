import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem
          </h1>
          <p className={styles.desc}>
            Lorem
          </p>
          <div className={styles.author}>
              <Image
                src="/hero.png"
                alt=''
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            src="/hero.png"
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem
        </p>
      </div>
    </div>
  )
}

export default BlogPost