import { FC } from 'react'
import { IPost } from '../../types/types'
import PostItem from '../PostItem'
import styles from './PostList.module.scss'

interface PostListProps {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.PostList}>
      <div className="container">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  )
}

export default PostList
