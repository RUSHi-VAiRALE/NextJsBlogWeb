import React from 'react'
import styles from "./page.module.css"
import Button from '@/app/components/Button/Button';
import Image from 'next/image';

const Category = async({params}) => {
  const param = await params;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>
        {param.category}
      </h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            fill={true} 
            src="/hero.png"
            className={styles.img}
            alt=""
            />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            fill={true} 
            src="/hero.png"
            className={styles.img}
            alt=""
            />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            fill={true} 
            src="/hero.png"
            className={styles.img}
            alt=""
            />
        </div>
      </div>
    </div>
  )
}

export default Category