import { FC } from 'react'
import { IPost } from '../../types/types'
import styles from './PostList.module.scss'

interface PostListProps {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return <div className={styles.PostList}></div>
}

export default PostList
