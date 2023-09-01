import { BASE_URL } from '../services/config'
import BlogsSwiper from './BlogsSwiper'

const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/api/posts`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('NO ANDA NAADAAAA')
  }
  const data = await res.json()
  return data
}

const BlogsPage = async () => {
  const blogs = await getBlogs()
  return (
    <section className='c-container mt-28'>
      <h2 className='text-5xl font-bold'>Blogs</h2>
      <BlogsSwiper blogs={blogs} />
    </section>
  )
}

export default BlogsPage
