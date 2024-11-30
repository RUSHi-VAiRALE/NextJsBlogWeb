import Link from 'next/link'
import React from 'react'
import styles from "./button.module.css"

function Button({url,text}) {
  return (
    <Link href={url}>
        <button className={styles.container}>
            {text}
        </button>
    </Link>
  )
}

export default Button