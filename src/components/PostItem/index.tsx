import { FC } from 'react'
import { IPost } from '../../types/types'
import styles from './PostItem.module.scss'

const PostItem: FC<IPost> = ({ id, title, body }) => {
  return (
    <div className={styles.PostItem}>
      <div style={{ display: 'flex' }}>
        <p>{id}</p>.<h3>{title}</h3>
      </div>
      <p>{body}</p>
    </div>
  )
}

export default PostItem
