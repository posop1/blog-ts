import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import PostList from './components/PostList'
import './styles/app.scss'
import { IPost } from './types/types'

function App() {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <PostList posts={posts} />
    </div>
  )
}

export default App
