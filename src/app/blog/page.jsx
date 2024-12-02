import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    cache : "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {

  const data = await getData();

  return (
    <div>
      {data.map((item)=>(
      <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
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
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.body}</p>
        </div>
      </Link>
    ))}
    </div>
  )
}

export default page