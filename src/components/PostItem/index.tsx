import { FC } from 'react'
import { IPost } from '../../types/types'
import styles from './PostItem.module.scss'

const PostItem: FC<IPost> = ({ id, title, body }) => {
  return <div className={styles.PostItem}>item</div>
}

export default PostItem
