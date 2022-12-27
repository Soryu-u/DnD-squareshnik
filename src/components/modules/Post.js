import React from 'react'
import styles from './Post.module.css'

export const Post = (data) => {
  return (
    <div className={styles.post}>
        {data.data.title}
        <div>
            {data.data.content}
        </div>
    </div>
  )
}
